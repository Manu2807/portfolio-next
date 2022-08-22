import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/rounded-avatar.png"
          type="image/x-icon"
        />

        <title>{`NAPTheDev's Portfolio`}</title>

        <meta name="title" content="NAPTheDev's Portfolio" />
        <meta name="description" content="Nguyen Anh Phong's Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="NAPTheDev's Portfolio" />
        <meta
          property="og:description"
          content="Nguyen Anh Phong's Portfolio"
        />
        <meta property="og:image" content="/avatar.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="NAPTheDev's Portfolio" />
        <meta
          property="twitter:description"
          content="Nguyen Anh Phong's Portfolio"
        />
        <meta property="twitter:image" content="/avatar.jpg" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            strategy="lazyOnload"
            async
            defer
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
          ></Script>
        )}
    </>
  );
}

export default MyApp;
