import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '@/components/Layout';
import JsonLd from '@/components/JsonLd';
import BlogCard from '@/components/blog/BlogCard';
import { BlogCluster, BlogPost, CLUSTER_LABELS, getAllPosts } from '@/lib/blog';
import { getBlogSchema } from '@/lib/structured-data';

const PAGE_URL = 'https://www.buildlore.top/blog';
const TITLE = 'Blog';
const DESCRIPTION =
  'Notes on branding, video marketing and launch content for tech companies and Web3 projects. Written by the studio that ships the work.';

type Props = { posts: BlogPost[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { posts: getAllPosts() } };
};

export default function BlogIndex({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const clusters = Object.keys(CLUSTER_LABELS) as BlogCluster[];

  return (
    <Layout>
      <Head>
        {generateNextSeo({
          title: TITLE,
          description: DESCRIPTION,
          canonical: PAGE_URL,
          openGraph: {
            url: PAGE_URL,
            title: 'Blog | BuildLore',
            description: DESCRIPTION,
            type: 'website',
          },
        })}
      </Head>
      <JsonLd data={getBlogSchema(posts)} />

      <section className="container-gs pt-12 pb-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Blog
        </h1>
        <p className="mt-3 max-w-2xl lg:max-w-3xl text-neutral-600 lg:text-lg">
          How launch films, brand systems and weekly content actually get made.
          No frameworks, no funnels, just what we do on client work.
        </p>
      </section>

      {clusters.map(cluster => {
        const list = posts.filter(p => p.cluster === cluster);
        if (list.length === 0) return null;
        return (
          <section key={cluster} className="container-gs py-8">
            <h2 className="text-xs tracking-[0.2em] text-neutral-400 uppercase">
              {CLUSTER_LABELS[cluster]}
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {list.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="container-gs py-12 pb-28">
        <div className="card p-8 lg:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-2xl lg:text-3xl font-extrabold tracking-tight">
              Need the work, not the reading?
            </p>
            <p className="mt-2 text-neutral-600 lg:text-lg">
              Branding, launch films and weekly assets for tech and Web3 teams.
            </p>
          </div>
          <a
            href="https://calendly.com/guichstudio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-black text-white px-8 py-3 text-sm font-medium transition-all duration-200 hover:scale-105"
          >
            Book a call
          </a>
        </div>
      </section>
    </Layout>
  );
}
