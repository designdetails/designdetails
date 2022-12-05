import * as React from 'react';
import App from 'next/app';
import { trackPageview, load, setSite } from 'fathom-client';
import Router from 'next/router';
import Providers from '../components/Providers';

Router.events.on('routeChangeComplete', () => {
  trackPageview();
});

function FathomProvider(props) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      load('ZSRPOEMC');
      setSite('ZSRPOEMC');
      trackPageview();
    }
  }, []);
  return <div {...props} />;
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <FathomProvider>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </FathomProvider>
    );
  }
}

export default MyApp;
