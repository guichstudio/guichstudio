import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import Layout from '@/components/Layout';
import FilterBar from '@/components/FilterBar';
import ProjectCard from '@/components/ProjectCard';
import { getProjectsByTag } from '@/lib/cms';
import { useRouter } from 'next/router';

export default function WorkPage() {
  const { query } = useRouter();
  const tag = (query.tag as string) || 'All';
  const list = getProjectsByTag(tag);

  return (
    <Layout>
      <Head>
        {generateNextSeo({
          title: 'Work',
          description:
            'Portfolio of branding, video production, and art direction projects for Web3, tech, and commercial clients including Fantasy.top, Pump.fun, Wasabi, and Pressiat.',
          canonical: 'https://www.buildlore.top/work',
          openGraph: {
            url: 'https://www.buildlore.top/work',
            title: 'Work | BuildLore',
            description:
              'Portfolio of branding, video production, and art direction projects for Web3, tech, and commercial clients.',
          },
        })}
      </Head>
      <section className="container-gs pt-12 pb-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">Work</h1>
        <p className="mt-3 max-w-2xl lg:max-w-3xl text-neutral-600 lg:text-lg">
          A selection of branding, art direction, and video production projects.
        </p>
      </section>
      <FilterBar />
      <section className="container-gs py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {list.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
