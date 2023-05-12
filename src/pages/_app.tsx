import * as React from 'react'
import App from 'next/app'
import * as Fathom from 'fathom-client'
import Providers from '../components/Providers'
import { useRouter } from 'next/router'

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
        <Component {...pageProps} />
      </Providers>
    )
  }
}

export default MyApp
