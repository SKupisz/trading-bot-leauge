import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Mohave } from 'next/font/google'

import { GlobalStyle, Theme } from '@/styled/main'
import { ThemeProvider } from 'styled-components'
import RankingContextProvider from '@/store/rankingContext'

const mohave = Mohave({
  weight: "500",
  subsets: ["latin", "latin-ext"]
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>XTB ranking - main page</title>
    <meta name="description" content="Projekt KNI PW mający na celu sprawdzić zastosowanie różnych metod inwestycyjnych" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.icon" />
  </Head>
  <main className={mohave.className}>
    <RankingContextProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RankingContextProvider>
  </main>
  </>
}
