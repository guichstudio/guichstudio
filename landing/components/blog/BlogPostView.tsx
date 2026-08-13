import Link from 'next/link';
import RichText from './RichText';
import {
  BlogPost,
  CLUSTER_LABELS,
  formatDate,
  readingMinutes,
} from '@/lib/blog';

function Blocks({ post }: { post: BlogPost }) {
  return (
    <>
      {post.blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="mt-14 mb-4 text-2xl md:text-3xl font-extrabold tracking-tight"
              >
                <RichText text={block.text} />
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className="mt-10 mb-3 text-xl font-bold">
                <RichText text={block.text} />
              </h3>
            );
          case 'p':
            return (
              <p key={i} className="mt-5 text-lg leading-8 text-neutral-700">
                <RichText text={block.text} />
              </p>
            );
          case 'ul':
            return (
              <ul key={i} className="mt-5 space-y-3">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-6 text-lg leading-8 text-neutral-700 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-neutral-400"
                  >
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="mt-5 space-y-3">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-8 text-lg leading-8 text-neutral-700"
                  >
                    <span className="absolute left-0 top-0 text-sm font-semibold text-neutral-400 leading-8">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            );
          case 'quote':
            return (
              <blockquote
                key={i}
                className="mt-8 border-l-2 border-neutral-900 pl-6 text-xl leading-8 font-bigcaslon"
              >
                <RichText text={block.text} />
                {block.attribution && (
                  <footer className="mt-2 text-sm not-italic opacity-60">
                    {block.attribution}
                  </footer>
                )}
              </blockquote>
            );
          case 'callout':
            return (
              <aside
                key={i}
                className="card mt-8 p-6 text-lg leading-8 text-neutral-800"
              >
                <RichText text={block.text} />
              </aside>
            );
          case 'table':
            return (
              <div key={i} className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-neutral-300">
                      {block.headers.map((h, j) => (
                        <th key={j} className="py-3 pr-6 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-b border-neutral-200">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className="py-3 pr-6 align-top text-neutral-700"
                          >
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'cta':
            return (
              <div
                key={i}
                className="card mt-12 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
              >
                <p className="text-lg leading-7 max-w-xl">{block.text}</p>
                {block.href.startsWith('/') ? (
                  <Link
                    href={block.href}
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-black text-white px-7 py-3 text-sm font-medium transition-all duration-200 hover:scale-105"
                  >
                    {block.label}
                  </Link>
                ) : (
                  <a
                    href={block.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-black text-white px-7 py-3 text-sm font-medium transition-all duration-200 hover:scale-105"
                  >
                    {block.label}
                  </a>
                )}
              </div>
            );
        }
      })}
    </>
  );
}

export default function BlogPostView({ post }: { post: BlogPost }) {
  return (
    <article className="container-gs py-12 pb-28">
      <div className="mx-auto max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="text-sm opacity-60 flex items-center gap-2"
        >
          <Link href="/blog" className="hover:opacity-100">
            Blog
          </Link>
          <span aria-hidden="true">/</span>
          <span>{CLUSTER_LABELS[post.cluster]}</span>
        </nav>

        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-xl leading-8 text-neutral-600">
          {post.description}
        </p>

        <p className="mt-4 text-sm opacity-60">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true"> · </span>
          {readingMinutes(post)} min read
          {post.updated && (
            <>
              <span aria-hidden="true"> · </span>
              <span>Updated {formatDate(post.updated)}</span>
            </>
          )}
        </p>

        <div className="card mt-8 p-6">
          <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase">
            Short answer
          </p>
          <p className="mt-3 text-lg leading-8 text-neutral-800">
            {post.answer}
          </p>
        </div>

        <Blocks post={post} />

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            FAQ
          </h2>
          <div className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200">
            {post.faq.map(item => (
              <div key={item.question} className="py-6">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="mt-2 text-lg leading-8 text-neutral-700">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {post.related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xs tracking-[0.2em] text-neutral-400 uppercase">
              Keep reading
            </h2>
            <ul className="mt-4 space-y-2">
              {post.related.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
