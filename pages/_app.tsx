import type { AppProps } from "next/app";
import {  Lexend } from "next/font/google";
import "@/styles/globals.css";

const lexend = Lexend({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <main className={`${lexend.className}`}>
      <Component {...pageProps} />;
    </main>
  )
}
