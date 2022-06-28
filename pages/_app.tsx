import type { AppProps } from "next/app";
// Styles
import "../styles/globals.css";
// Fonts
import "../styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
