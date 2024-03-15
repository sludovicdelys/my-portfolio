import type { AppProps } from "next/app";
import {  Roboto } from "next/font/google";
import "@/styles/globals.css";

const roboto = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <main className={`${roboto.className}`}>
      <Component {...pageProps} />;
    </main>
  )
}
