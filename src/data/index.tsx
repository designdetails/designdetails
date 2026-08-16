import fetch from 'isomorphic-unfetch'
import { legacyEpisodeTokens } from '../config/starting-episodes'

const API_URL_ROOT = 'https://api.simplecast.com'
const API_KEY = process.env.SIMPLECAST_V2_API_KEY
const SHOW_ID = '56e415f0-1911-44b3-9b1c-99551f7146c3'

function transformEpisodeData(rawEpisode) {
  return {
    description: rawEpisode.description,
    id: rawEpisode.id,
    legacy_id: rawEpisode.legacy_id || null,
    long_description: rawEpisode.long_description || null,
    published_at: rawEpisode.published_at,
    status: rawEpisode.status,
    title: rawEpisode.title,
    token: rawEpisode.token,
  }
}

function isUsableEpisode(rawEpisode) {
  if (!rawEpisode || typeof rawEpisode !== 'object') return false
  if (rawEpisode.error || rawEpisode.status === 404) return false
  return typeof rawEpisode.id === 'string' && rawEpisode.id.length > 0
}

async function simplecast(url, opts = {}) {
  const response = await fetch(`${API_URL_ROOT}${url}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    ...opts,
  })

  const text = await response.text()
  if (!text) return null

  try {
    return JSON.parse(text)
  } catch (err) {
    console.error(err)
    return null
  }
}

async function fetchEpisodeByToken(token) {
  const res = await simplecast(
    `/episodes/search?token=${encodeURIComponent(token)}`,
    {
      method: 'POST',
    }
  )
  return isUsableEpisode(res) ? transformEpisodeData(res) : null
}

async function fetchEpisodeById(id) {
  const res = await simplecast(`/episodes/${encodeURIComponent(id)}`)
  return isUsableEpisode(res) ? transformEpisodeData(res) : null
}

export async function getEpisodes({ limit = 10, offset = 0 }) {
  return await simplecast(
    `/podcasts/${SHOW_ID}/episodes?limit=${limit}&offset=${offset}&sort=published_at_desc`
  )
    .then((res) =>
      (res && res.collection ? res.collection : []).filter(
        (ep) => ep.status === 'published'
      )
    )
    .then((res) => res.map(transformEpisodeData))
    .catch((err) => {
      console.error(err)
      return []
    })
}

export async function getLatestEpisode() {
  const episodes = await getEpisodes({ limit: 1, offset: 0 })
  return episodes[0]
}

export async function getEpisode(id) {
  if (!id) return null

  const lookupId = String(id)
  const token = legacyEpisodeTokens[lookupId] || lookupId

  try {
    const byToken = await fetchEpisodeByToken(token)
    if (byToken) return byToken
  } catch (err) {
    console.error(err)
  }

  try {
    const byId = await fetchEpisodeById(lookupId)
    if (byId) return byId
  } catch (err) {
    console.error(err)
  }

  try {
    const episodes = await getEpisodes({ limit: 1000, offset: 0 })
    const match = episodes.find(
      (episode) =>
        episode.token === token ||
        episode.token === lookupId ||
        episode.id === lookupId ||
        String(episode.legacy_id) === lookupId
    )

    if (match) {
      const full = await fetchEpisodeByToken(match.token)
      return full || match
    }
  } catch (err) {
    console.error(err)
  }

  return null
}
