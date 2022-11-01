import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-M8V2TNP'
}

TagManager.initialize(tagManagerArgs)

import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './routes'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-M8V2TNP'
}

TagManager.initialize(tagManagerArgs)

const app = document.getElementById('app')
ReactDOM.render(<Router routes={routes} />, app)

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
