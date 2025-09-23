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
      <section className="container-gs pt-12 pb-6">
        <h1 className="text-3xl md:text-5xl font-extrabold">Work</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Sélection de projets CGI, direction artistique et décors numériques.
        </p>
      </section>
      <FilterBar />
      <section className="container-gs py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
