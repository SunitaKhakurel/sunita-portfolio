import type { Project } from '../types'
import { Link } from 'react-router-dom'


export default function ProjectCard({ p }: { p: Project }) {
return (
<article className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition">
<h3 className="text-lg font-semibold">
<Link to={`/projects/${p.slug}`} className="hover:underline">{p.title}</Link>
</h3>
<p className="mt-1 text-slate-600">{p.summary}</p>
<p className="mt-2 text-xs text-slate-500">Tech: {p.tech}</p>
<div className="mt-4 flex gap-3 text-sm">
{p.repoUrl && <a className="text-blue-600 hover:underline" href={p.repoUrl} target="_blank">Code</a>}
{p.liveUrl && <a className="text-blue-600 hover:underline" href={p.liveUrl} target="_blank">Live</a>}
</div>
</article>
)
}