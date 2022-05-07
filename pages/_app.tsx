import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hi, 这里是弘树</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="description" content="El psy congroo" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
