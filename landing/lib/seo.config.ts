import type { DefaultSeoProps } from 'next-seo/pages';

const SITE_URL = 'https://www.buildlore.top';
const SITE_NAME = 'BuildLore';
const DEFAULT_DESCRIPTION =
  'Creative agency specializing in branding, video marketing, and content for tech companies and Web3 projects. Launch Sprints, monthly growth retainers, and cinematic storytelling.';

export const SEO_CONFIG: DefaultSeoProps = {
  titleTemplate: '%s | BuildLore',
  defaultTitle: 'BuildLore — Branding & Video Marketing for Tech & Web3',
  description: DEFAULT_DESCRIPTION,
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'BuildLore — Branding & Video Marketing for Tech & Web3',
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'BuildLore — Retain attention. Build fans.',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@guichstudio',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'theme-color', content: '#ffffff' },
    { name: 'author', content: 'BuildLore' },
  ],
};

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION };
