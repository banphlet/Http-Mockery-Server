'use strict'

import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '@shopify/polaris/styles.css'
import 'isomorphic-unfetch'

import dynamic from 'next/dynamic'
const AppProviderDynamic = require('@shopify/polaris').AppProvider



export function WithProvider(Components) {
  return class Provider extends Component {
    static async getInitialProps(ctx) {
      const pageProps =
        Components.getInitialProps && (await Components.getInitialProps(ctx))

      return {
        ...pageProps,
      }
    }

    render() {
      return(
          <AppProviderDynamic>
   <Components {...this.props} />
          </AppProviderDynamic>
     )
    }
  }
}
