import { createHmac, randomUUID } from 'crypto'
import type { NextApiRequest, NextApiResponse } from 'next'

function headerValue(req: NextApiRequest, name: string) {
  const raw = req.headers[name]
  if (!raw) return ''
  const value = Array.isArray(raw) ? raw[0] : raw
  if (!value) return ''
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function geoFromHeaders(req: NextApiRequest) {
  const country =
    headerValue(req, 'x-vercel-ip-country') || headerValue(req, 'cf-ipcountry')
  const region =
    headerValue(req, 'x-vercel-ip-country-region') ||
    headerValue(req, 'cf-region')
  const city =
    headerValue(req, 'x-vercel-ip-city') || headerValue(req, 'cf-ipcity')
  const geo: { country?: string; region?: string; city?: string } = {}
  if (country) geo.country = country
  if (region) geo.region = region
  if (city) geo.city = city
  return geo
}

function isAllowedPath(path: string) {
  if (path === '/') return true
  return /^\/episodes\/[^/]+\/?$/.test(path)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      return res.status(405).json({ ok: true, skipped: true })
    }

    const secret = process.env.ACTIVITY_INGEST_HMAC_SECRET
    if (!secret) {
      return res.status(200).json({ ok: true, skipped: true })
    }

    let body = req.body
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body)
      } catch {
        body = {}
      }
    }
    if (!body || typeof body !== 'object') body = {}
    const path = typeof body.path === 'string' ? body.path : ''
    const title = typeof body.title === 'string' ? body.title : ''

    if (!isAllowedPath(path)) {
      return res.status(200).json({ ok: true, skipped: true })
    }

    const envelope = {
      source: 'design-details',
      type: 'visit',
      speed: 'signal',
      summary: `Someone visited ${title}`,
      visibility: 'public',
      idempotency_key: `design-details:visit:${randomUUID()}`,
      subject: { kind: 'page', label: title, href: path },
      meta: { path, title, ...geoFromHeaders(req) },
    }

    const raw = JSON.stringify(envelope)
    const signature = createHmac('sha256', secret).update(raw).digest('hex')
    const url =
      process.env.ACTIVITY_INGEST_URL || 'https://brianlovin.com/api/activity'

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-activity-signature': signature,
      },
      body: raw,
      signal: AbortSignal.timeout(800),
    }).catch(() => {})

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(200).json({ ok: true })
  }
}
