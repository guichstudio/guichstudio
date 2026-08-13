import { faqData, projects } from './cms';

const SITE_URL = 'https://www.buildlore.top';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BuildLore',
  url: SITE_URL,
  logo: `${SITE_URL}/og-default.jpg`,
  description:
    'Creative agency specializing in branding, video marketing, and content for tech companies and Web3 projects.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: 'https://calendly.com/guichstudio/30min',
  },
  sameAs: ['https://www.instagram.com/guich.studio/'],
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: 'BuildLore',
  },
  serviceType: 'Creative Agency',
  name: 'BuildLore Creative Services',
  description:
    'Branding, video marketing, and content production for tech companies and Web3 projects.',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Launch Sprint',
      price: '4600',
      priceCurrency: 'USD',
      description:
        'Two-week launch package: narrative spine, teaser film, launch page art direction, and social starter kit.',
    },
    {
      '@type': 'Offer',
      name: 'Growth',
      price: '6000',
      priceCurrency: 'USD',
      description:
        'Monthly retainer: 3-5 brand assets/week, 48h hot-moment response, creator seeding, and lore maintenance.',
    },
    {
      '@type': 'Offer',
      name: 'Scale',
      price: '11000',
      priceCurrency: 'USD',
      description:
        'Full-service monthly: 15-25 assets, quarterly cinematic video, creator orchestration, style governance, and UX revision.',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export function getProjectSchema(slug: string) {
  const project = projects.find(p => p.slug === slug);
  if (!project) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description || `${project.title}, ${project.role}`,
    url: `${SITE_URL}/work/${project.slug}`,
    thumbnailUrl: project.thumb,
    creator: {
      '@type': 'Organization',
      name: 'BuildLore',
    },
    inLanguage: 'en',
    ...(project.year && {
      dateCreated: `${project.year}-${project.month || '01'}-${project.day || '01'}`,
    }),
  };
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

import type { BlogPost } from './blog';

const PUBLISHER = {
  '@type': 'Organization',
  name: 'BuildLore',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/og-default.jpg`,
  },
};

export function getBlogPostingSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: 'en',
    author: {
      '@type': 'Organization',
      name: 'BuildLore',
      url: SITE_URL,
    },
    publisher: PUBLISHER,
    image: `${SITE_URL}/og-default.jpg`,
    articleSection: post.cluster === 'web3' ? 'Web3 & crypto' : 'Tech & brand',
  };
}

export function getPostFaqSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getPostBreadcrumbSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };
}

export function getBlogSchema(posts: BlogPost[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'BuildLore Blog',
    description:
      'Notes on branding, video marketing and launch content for tech companies and Web3 projects.',
    url: `${SITE_URL}/blog`,
    inLanguage: 'en',
    publisher: PUBLISHER,
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      description: post.metaDescription,
    })),
  };
}
