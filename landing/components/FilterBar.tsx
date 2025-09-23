import { allTags } from '@/lib/cms';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FilterBar() {
  const { query } = useRouter();
  const active = (query.tag as string) || 'All';
  return (
    <div className="container-gs sticky top-[60px] z-40 bg-white/80 backdrop-blur py-3 border-b border-neutral-200">
      <div className="flex flex-wrap gap-2">
        {allTags.map(tag => (
          <Link
            key={tag}
            href={
              tag === 'All' ? '/work' : `/work?tag=${encodeURIComponent(tag)}`
            }
            scroll={false}
            className={`px-3 py-1 rounded-full border text-sm transition ${active === tag ? 'border-neutral-600' : 'border-neutral-200 opacity-70 hover:opacity-100'}`}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
