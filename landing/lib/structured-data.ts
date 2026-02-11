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
    description: project.description || `${project.title} — ${project.role}`,
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
