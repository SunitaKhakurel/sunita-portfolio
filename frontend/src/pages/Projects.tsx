import { useEffect, useState } from 'react'
import { getProjects } from '../api'
import type { Project } from '../types'
import ProjectCard from '../components/ProjectCard'
import Loading from '../components/Loading'


export default function Projects() {
const [items, setItems] = useState<Project[]>([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)


useEffect(() => {
getProjects()
.then((data) => setItems(data))
.catch((e) => setError(e.message))
.finally(() => setLoading(false))
}, [])


return (
<section>
<h1 className="text-3xl font-bold">Projects</h1>
<p className="text-slate-600">Things I’ve built & shipped.</p>


<div className="mt-6">
{loading && <Loading />}
{error && <p className="text-red-600">{error}</p>}
{!loading && !error && (
<div className="grid gap-4 sm:grid-cols-2">
{items.map((p) => <ProjectCard key={p.id} p={p} />)}
</div>
)}
</div>
</section>
)
}