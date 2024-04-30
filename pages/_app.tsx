import type { AppProps } from "next/app";
import {  Lexend } from "next/font/google";
import "@/styles/globals.css";
import Head from "next/head";

const lexend = Lexend({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${lexend.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
