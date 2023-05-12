import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: 'https://cometeer.com/r/iIgdGw',
      })
      res.end()
    } else {
      Router.push('/')
    }
    return {}
  }
}
