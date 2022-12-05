import React from 'react';
import Router from 'next/router';

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location:
          'https://podcasts.apple.com/us/podcast/design-details/id947191070',
      });
      res.end();
    } else {
      Router.push('/');
    }
    return {};
  }
}
