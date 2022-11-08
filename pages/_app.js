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

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import Users from './Users'
import Posts from './Posts'
import Login from './Login';
const App = () => {
  useEffect(() => {
	TagManager.initialize({ gtmId: 'GTM-XXXXX' });
  }, []);
  return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Users} exact />
          <Route path="/posts" component={Posts} exact />
          <Route path="/login" component={Login} exact />
        </React.Fragment>
      </BrowserRouter>
  );
}

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
