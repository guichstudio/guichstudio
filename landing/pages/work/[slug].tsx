import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import Layout from '@/components/Layout';
import JsonLd from '@/components/JsonLd';
import { getProject, projects, Project } from '@/lib/cms';
import { getProjectSchema } from '@/lib/structured-data';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

type Props = {
  project: Project;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = getProject(params!.slug as string);
  if (!project) return { notFound: true };
  return { props: { project } };
};

export default function ProjectDetail({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const pageTitle = `${project.title} — ${project.role}`;
  const pageDescription = project.description
    ? project.description.slice(0, 155) + '...'
    : `${project.title} — ${project.role} by BuildLore.`;
  const pageUrl = `https://www.buildlore.top/work/${project.slug}`;
  const projectSchema = getProjectSchema(project.slug);

  return (
    <Layout>
      <Head>
        {generateNextSeo({
          title: pageTitle,
          description: pageDescription,
          canonical: pageUrl,
          openGraph: {
            url: pageUrl,
            title: `${pageTitle} | BuildLore`,
            description: pageDescription,
            images: [
              {
                url: project.thumb,
                width: 1280,
                height: 720,
                alt: project.title,
                type: 'image/webp',
              },
            ],
            type: 'article',
          },
        })}
      </Head>
      {projectSchema && <JsonLd data={projectSchema} />}
      <article className="container-gs py-12">
        <header className="mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            {project.title}
          </h1>
          <p className="mt-2 opacity-80">
            {project.role} • {project.year}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map(t => (
              <span
                key={t}
                className="rounded-full border border-neutral-800 px-3 py-1 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </header>
        <div className="card overflow-hidden">
          <div className="relative aspect-[16/9]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              controls
              loop
              playsInline
              preload="metadata"
              poster={project.thumb}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        </div>
        {project.description && (
          <div className="mt-6 max-w-3xl opacity-80 leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        )}
      </article>
    </Layout>
  );
}
