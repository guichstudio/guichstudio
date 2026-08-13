#!/usr/bin/env node
/**
 * Blog policy linter for buildlore.top.
 * Run: node scripts/lint-blog.mjs
 * Exit code 1 on any violation. The daily publishing routine must run this
 * before committing.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BLOG_DIR = path.join(ROOT, 'content', 'blog');

const BANNED_WORDS = [
  'revolutionize',
  'revolutionise',
  'unleash',
  'seamlessly',
  'game-changing',
  'game changing',
  'elevate',
  'delve',
  'in today',
  'unlock the power',
  'take it to the next level',
];

// Outbound links are allowed only to our own booking page.
const ALLOWED_EXTERNAL = ['https://calendly.com/guichstudio/30min'];

const KNOWN_INTERNAL = ['/', '/work', '/blog', '/#service-cards'];

const errors = [];
const warnings = [];

function fail(file, msg) {
  errors.push(`${file}: ${msg}`);
}
function warn(file, msg) {
  warnings.push(`${file}: ${msg}`);
}

function loadPost(file) {
  const src = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const module = { exports: {} };
  const fn = new Function('exports', 'module', 'require', js);
  fn(module.exports, module, () => ({}));
  return module.exports.post;
}

function textOf(post) {
  const parts = [post.title, post.description, post.answer];
  for (const b of post.blocks) {
    if ('text' in b) parts.push(b.text);
    if ('items' in b) parts.push(...b.items);
    if ('headers' in b) parts.push(...b.headers, ...b.rows.flat());
    if (b.type === 'cta') parts.push(b.label);
  }
  for (const f of post.faq) parts.push(f.question, f.answer);
  return parts.join('\n');
}

function words(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

const files = fs
  .readdirSync(BLOG_DIR)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

if (files.length === 0) {
  console.error('No blog posts found in content/blog/');
  process.exit(1);
}

const registry = fs.readFileSync(path.join(BLOG_DIR, 'index.ts'), 'utf8');
const seenSlugs = new Set();
const allPosts = [];

for (const file of files) {
  let post;
  try {
    post = loadPost(file);
  } catch (err) {
    fail(file, `cannot be loaded: ${err.message}`);
    continue;
  }
  if (!post) {
    fail(file, 'does not export `post`');
    continue;
  }
  allPosts.push(post);

  const expected = `${post.slug}.ts`;
  if (file !== expected) fail(file, `filename should be ${expected}`);
  if (seenSlugs.has(post.slug)) fail(file, `duplicate slug ${post.slug}`);
  seenSlugs.add(post.slug);

  if (!registry.includes(`./${post.slug}`))
    fail(file, 'not imported in content/blog/index.ts');

  const body = textOf(post);

  // Louis absolute rule: never an em dash or an en dash in published copy.
  const dash = body.match(/[—–]/);
  if (dash) {
    const line = body
      .split('\n')
      .find(l => /[—–]/.test(l));
    fail(file, `em/en dash found: "${line?.slice(0, 90)}"`);
  }

  if (post.metaTitle.length < 30 || post.metaTitle.length > 60)
    fail(file, `metaTitle is ${post.metaTitle.length} chars, want 30-60`);
  if (post.metaDescription.length < 110 || post.metaDescription.length > 158)
    fail(
      file,
      `metaDescription is ${post.metaDescription.length} chars, want 110-158`
    );

  const answerWords = words(post.answer);
  if (answerWords < 35 || answerWords > 80)
    fail(file, `answer block is ${answerWords} words, want 35-80`);
  if (!/BuildLore/.test(post.answer))
    fail(file, 'answer block must name BuildLore (AI Overviews citation)');

  if (post.faq.length < 3 || post.faq.length > 5)
    fail(file, `${post.faq.length} FAQ entries, want 3-5`);
  for (const f of post.faq) {
    if (!f.question.trim().endsWith('?'))
      fail(file, `FAQ question missing "?": ${f.question}`);
    const n = words(f.answer);
    if (n < 25 || n > 90) fail(file, `FAQ answer is ${n} words, want 25-90`);
  }

  if (post.related.length < 2) fail(file, 'needs at least 2 related links');

  if (!post.blocks.some(b => b.type === 'cta'))
    fail(file, 'needs exactly one cta block');
  if (post.blocks.filter(b => b.type === 'cta').length > 1)
    fail(file, 'more than one cta block');

  const h2Count = post.blocks.filter(b => b.type === 'h2').length;
  if (h2Count < 4) fail(file, `${h2Count} h2 sections, want at least 4`);

  const total = words(body);
  if (total < 900) fail(file, `${total} words, want at least 900`);

  for (const banned of BANNED_WORDS) {
    if (new RegExp(`\\b${banned.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'i').test(body))
      fail(file, `banned word: "${banned}"`);
  }

  // Links
  const links = [...body.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map(m => m[2]);
  const ctaHrefs = post.blocks
    .filter(b => b.type === 'cta')
    .map(b => b.href);
  for (const href of [...links, ...ctaHrefs, ...post.related.map(r => r.href)]) {
    if (href.startsWith('http')) {
      if (!ALLOWED_EXTERNAL.includes(href))
        fail(file, `outbound link not allowed: ${href}`);
    } else if (href.startsWith('/blog/')) {
      // checked after every post is loaded
    } else if (!KNOWN_INTERNAL.includes(href)) {
      fail(file, `unknown internal link: ${href}`);
    }
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date))
    fail(file, `invalid date: ${post.date}`);
  if (!['web3', 'tech'].includes(post.cluster))
    fail(file, `invalid cluster: ${post.cluster}`);
  if (post.related.some(r => r.href === `/blog/${post.slug}`))
    fail(file, 'links to itself in related');
}

// Cross-post link integrity
for (const post of allPosts) {
  const body = textOf(post);
  const hrefs = [
    ...[...body.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map(m => m[2]),
    ...post.related.map(r => r.href),
  ].filter(h => h.startsWith('/blog/'));
  for (const href of hrefs) {
    const slug = href.replace('/blog/', '');
    if (!seenSlugs.has(slug))
      fail(`${post.slug}.ts`, `links to missing post: ${href}`);
  }
}

// Cadence: never two posts on the same calendar day.
const byDate = new Map();
for (const post of allPosts) {
  const list = byDate.get(post.date) || [];
  list.push(post.slug);
  byDate.set(post.date, list);
}
for (const [date, slugs] of byDate) {
  if (slugs.length > 1 && date !== allPosts[0].date)
    warn('cadence', `${slugs.length} posts dated ${date}: ${slugs.join(', ')}`);
}

// Keyword collisions
const byKeyword = new Map();
for (const post of allPosts) {
  const k = post.keyword.toLowerCase();
  const list = byKeyword.get(k) || [];
  list.push(post.slug);
  byKeyword.set(k, list);
}
for (const [keyword, slugs] of byKeyword) {
  if (slugs.length > 1)
    fail('keywords', `"${keyword}" targeted by ${slugs.join(', ')}`);
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);

console.log(
  `\n${allPosts.length} posts checked, ${errors.length} errors, ${warnings.length} warnings`
);
process.exit(errors.length > 0 ? 1 : 0);
