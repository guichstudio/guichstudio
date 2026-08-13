// Blog content model for buildlore.top
// One data file per post in content/blog/, registered in content/blog/index.ts.
// Inline formatting inside `text` fields: **bold** and [label](/path).

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'callout'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; text: string; label: string; href: string };

export type BlogCluster = 'web3' | 'tech';

export type BlogPost = {
  /** URL segment: /blog/<slug> */
  slug: string;
  /** H1 */
  title: string;
  /** <title> without the site suffix, 40-60 chars */
  metaTitle: string;
  /** meta description, 120-158 chars */
  metaDescription: string;
  /** dek under the H1, also used on the listing card */
  description: string;
  /** publication date, YYYY-MM-DD */
  date: string;
  /** last substantive edit, YYYY-MM-DD */
  updated?: string;
  cluster: BlogCluster;
  /** the query this post is written for */
  keyword: string;
  /**
   * Direct-answer block rendered right after the intro.
   * 40-60 words, self-contained, names BuildLore. Feeds AI Overviews citations.
   */
  answer: string;
  blocks: BlogBlock[];
  /** 3-5 questions, rendered as an FAQ section and as FAQPage JSON-LD */
  faq: { question: string; answer: string }[];
  /** internal links only */
  related: { label: string; href: string }[];
};

export const CLUSTER_LABELS: Record<BlogCluster, string> = {
  web3: 'Web3 & crypto',
  tech: 'Tech & brand',
};

import { posts } from '@/content/blog';

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}

export function getPostsByCluster(cluster: BlogCluster | 'all'): BlogPost[] {
  const all = getAllPosts();
  return cluster === 'all' ? all : all.filter(p => p.cluster === cluster);
}

function blockWords(block: BlogBlock): number {
  switch (block.type) {
    case 'p':
    case 'h2':
    case 'h3':
    case 'callout':
      return block.text.split(/\s+/).length;
    case 'quote':
      return block.text.split(/\s+/).length;
    case 'ul':
    case 'ol':
      return block.items.join(' ').split(/\s+/).length;
    case 'table':
      return [...block.headers, ...block.rows.flat()].join(' ').split(/\s+/)
        .length;
    case 'cta':
      return 0;
  }
}

export function wordCount(post: BlogPost): number {
  const body = post.blocks.reduce((n, b) => n + blockWords(b), 0);
  const faq = post.faq
    .map(f => `${f.question} ${f.answer}`)
    .join(' ')
    .split(/\s+/).length;
  return body + faq + post.answer.split(/\s+/).length;
}

export function readingMinutes(post: BlogPost): number {
  return Math.max(2, Math.round(wordCount(post) / 220));
}

export function formatDate(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
