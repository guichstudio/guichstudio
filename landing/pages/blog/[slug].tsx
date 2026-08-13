import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Layout from '@/components/Layout';
import JsonLd from '@/components/JsonLd';
import BlogPostView from '@/components/blog/BlogPostView';
import { BlogPost, getAllPosts, getPost } from '@/lib/blog';
import {
  getBlogPostingSchema,
  getPostBreadcrumbSchema,
  getPostFaqSchema,
} from '@/lib/structured-data';

type Props = { post: BlogPost };

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = getPost(params!.slug as string);
  if (!post) return { notFound: true };
  return { props: { post } };
};

export default function BlogPostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const url = `https://www.buildlore.top/blog/${post.slug}`;

  return (
    <Layout>
      <Head>
        {generateNextSeo({
          title: post.metaTitle,
          description: post.metaDescription,
          canonical: url,
          openGraph: {
            url,
            title: `${post.metaTitle} | BuildLore`,
            description: post.metaDescription,
            type: 'article',
            article: {
              publishedTime: post.date,
              modifiedTime: post.updated || post.date,
              authors: ['BuildLore'],
              tags: [post.keyword],
            },
          },
        })}
      </Head>
      <JsonLd data={getBlogPostingSchema(post)} />
      <JsonLd data={getPostFaqSchema(post)} />
      <JsonLd data={getPostBreadcrumbSchema(post)} />
      <BlogPostView post={post} />
    </Layout>
  );
}
