import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: 'https://open.spotify.com/show/7kAx8RJce757LXVoX2FIpf',
      })
      res.end()
    } else {
      Router.push('/')
    }
    return {}
  }
}
