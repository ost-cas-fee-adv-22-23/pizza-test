import '../styles/globals.css'
import '@smartive-education/pizza-hawaii/dist/bundle.css'

import "@fontsource/poppins/400.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
