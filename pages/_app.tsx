import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({
  weight: ['400', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya',
})

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <main className={alegreya.className}>
      <Component {...pageProps} />;
    </main>
  )
}
