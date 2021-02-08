import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppLayout } from '@cellebrite/ui';
function CustomApp({ Component, pageProps, router }: AppProps) {
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
        <AppLayout router={router}>
          <Component {...pageProps} />
        </AppLayout>
      </div>
    </>
  );
}

export default CustomApp;
