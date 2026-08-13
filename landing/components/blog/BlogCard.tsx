import Link from 'next/link';
import { BlogPost, formatDate, readingMinutes } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card p-6 lg:p-8 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1">
      <h2 className="text-xl lg:text-2xl font-extrabold tracking-tight">
        <Link href={`/blog/${post.slug}`} className="hover:opacity-70">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-neutral-600 leading-7 flex-1">
        {post.description}
      </p>
      <p className="mt-5 text-sm opacity-60">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true"> · </span>
        {readingMinutes(post)} min read
      </p>
    </article>
  );
}
