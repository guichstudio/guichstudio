import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import {
  organizationSchema,
  serviceSchema,
  faqSchema,
} from '@/lib/structured-data';

export default function Home() {
  return (
    <Layout>
      <Head>
        {generateNextSeo({
          canonical: 'https://www.buildlore.top',
          openGraph: { url: 'https://www.buildlore.top' },
        })}
      </Head>
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
    </Layout>
  );
}
