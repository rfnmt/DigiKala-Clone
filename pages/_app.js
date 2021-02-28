import Head from "next/head";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import "../styles/globals.css";
import 'swiper/swiper.min.css';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
