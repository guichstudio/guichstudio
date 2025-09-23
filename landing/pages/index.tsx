import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/cms';

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <section className="container-gs py-12">
        <header className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Derniers projets</h2>
          <a className="text-sm opacity-70 hover:opacity-100" href="/work">
            Tout voir
          </a>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section> */}
    </Layout>
  );
}
