import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
// import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
// import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
// import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import theme from '../theme';
import { AppLayout } from '@cellebrite/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cellebrite</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="app">
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </div>
    </>
  );
}

export default CustomApp;
