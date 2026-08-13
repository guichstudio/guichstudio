const fs = require('fs');
const path = require('path');

/**
 * Blog posts carry a real publication date. Read it from the content files so
 * <lastmod> reflects the article, not the moment the site was rebuilt.
 * Falls back to the build date if a file cannot be parsed.
 */
function readBlogDates() {
  const dir = path.join(__dirname, 'content', 'blog');
  const dates = {};
  let files = [];
  try {
    files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  } catch {
    return dates;
  }
  for (const file of files) {
    const src = fs.readFileSync(path.join(dir, file), 'utf8');
    const slug = /slug:\s*'([^']+)'/.exec(src);
    const date = /date:\s*'(\d{4}-\d{2}-\d{2})'/.exec(src);
    const updated = /updated:\s*'(\d{4}-\d{2}-\d{2})'/.exec(src);
    if (slug && date) {
      dates[`/blog/${slug[1]}`] = `${(updated || date)[1]}T00:00:00.000Z`;
    }
  }
  return dates;
}

const BLOG_DATES = readBlogDates();

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.buildlore.top',
  generateRobotsTxt: false,
  exclude: ['/success', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === '/work') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.startsWith('/work/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === '/blog') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: BLOG_DATES[path] || new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
