import Layout from '@/components/Layout'
import { getProject, projects } from '@/lib/cms'
import Image from 'next/image'
import { useRouter } from 'next/router'


export default function ProjectDetail() {
const { query } = useRouter()
const slug = query.slug as string
const project = getProject(slug)


if (!project) return null
return (
<Layout>
<article className="container-gs py-12">
<header className="mb-6">
<h1 className="text-3xl md:text-5xl font-extrabold">{project.title}</h1>
<p className="mt-2 opacity-80">{project.role} • {project.year}</p>
<div className="mt-3 flex flex-wrap gap-2">
{project.tags.map(t => (
<span key={t} className="rounded-full border border-neutral-800 px-3 py-1 text-xs">{t}</span>
))}
</div>
</header>
<div className="card overflow-hidden">
<div className="relative aspect-[16/9]">
<Image src={project.thumb} alt={project.title} fill className="object-cover" />
</div>
</div>
{project.description && (
<p className="mt-6 max-w-3xl text-neutral-300 leading-relaxed">{project.description}</p>
)}
</article>
</Layout>
)
}