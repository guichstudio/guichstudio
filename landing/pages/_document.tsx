import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="preload"
          href="/fonts/Inter-VariableFont_opsz,wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BigCaslon.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* AI discoverability */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM Full Content" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        {/* Google Search Console ownership. Do not remove: deleting this tag
            unverifies the property and the sitemap reporting goes with it. */}
        <meta
          name="google-site-verification"
          content="BSyAOiwfBwR9MRFCZ6GOTc7pwe1XQi-b_EkSFAlIDOk"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
