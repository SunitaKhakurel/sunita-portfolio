import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProject } from '../api'
import type { Project } from '../types'


export default function ProjectDetail() {
const { slug } = useParams()
const [p, setP] = useState<Project | null>(null)
const [error, setError] = useState<string | null>(null)


useEffect(() => {
if (!slug) return
getProject(slug).then(setP).catch((e) => setError(e.message))
}, [slug])


if (error) return <p className="text-red-600">{error}</p>
if (!p) return <p>Loading…</p>


return (
<article className="prose max-w-none">
<h1>{p.title}</h1>
<p className="text-slate-600">{p.summary}</p>
{p.problem && (
<>
<h2>Problem</h2>
<p>{p.problem}</p>
</>
)}
{p.solution && (
<>
<h2>Solution</h2>
<p>{p.solution}</p>
</>
)}
{p.impact && (
<>
<h2>Impact</h2>
<p>{p.impact}</p>
</>
)}
<p className="text-sm text-slate-500">Tech: {p.tech}</p>
<div className="mt-4 flex gap-4">
{p.repoUrl && <a className="text-blue-600" href={p.repoUrl} target="_blank">Code</a>}
{p.liveUrl && <a className="text-blue-600" href={p.liveUrl} target="_blank">Live</a>}
</div>
</article>
)
}