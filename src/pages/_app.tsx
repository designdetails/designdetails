import * as React from 'react'
import App from 'next/app'
import * as Fathom from 'fathom-client'
import Providers from '../components/Providers'
import { useRouter } from 'next/router'

function shouldPing(path: string) {
  if (path === '/') return true
  return /^\/episodes\/[^/]+\/?$/.test(path)
}

function visitTitle(path: string) {
  if (path === '/') return 'Design Details'
  const fromDoc = typeof document !== 'undefined' ? document.title : ''
  const cleaned = fromDoc.replace(/\s*[·|\-–—].*$/, '').trim()
  return cleaned || 'an episode'
}

function pingVisit(path: string) {
  if (typeof window !== 'undefined') {
    const host = window.location.hostname
    if (host === 'localhost' || host === '127.0.0.1') return
  }
  if (!shouldPing(path)) return
  void fetch('/api/activity', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      path,
      title: visitTitle(path),
    }),
    signal: AbortSignal.timeout(800),
  }).catch(() => {})
}

function ActivityVisit() {
  const router = useRouter()
  React.useEffect(() => {
    function onRoute(url?: string) {
      const path = (url || router.asPath || '/').split('?')[0]
      pingVisit(path)
    }

    onRoute()
    router.events.on('routeChangeComplete', onRoute)
    return () => {
      router.events.off('routeChangeComplete', onRoute)
    }
  }, [router])

  return null
}

function FathomProvider() {
  const router = useRouter()
  React.useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: ['designdetails.fm'],
      excludedDomains: ['vercel.app,localhost'],
      spa: 'auto',
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return null
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Providers>
        <FathomProvider />
        <ActivityVisit />
        <Component {...pageProps} />
      </Providers>
    )
  }
}

export default MyApp
