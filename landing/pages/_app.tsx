import type { AppProps } from 'next/app';
import Head from 'next/head';
import { generateDefaultSeo } from 'next-seo/pages';
import { SEO_CONFIG } from '@/lib/seo.config';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>{generateDefaultSeo(SEO_CONFIG)}</Head>
      <Component {...pageProps} />
    </>
  );
}
