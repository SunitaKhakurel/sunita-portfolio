import { useEffect, useState } from 'react'
import { getJournal } from '../api'


interface Post { id: string; slug: string; title: string; createdAt: string; }


export default function Journal() {
const [posts, setPosts] = useState<Post[]>([])
useEffect(() => { getJournal().then(setPosts).catch(() => setPosts([])) }, [])


return (
<section>
<h1 className="text-3xl font-bold">Daily Journal (TIL)</h1>
<p className="text-slate-600">Short notes of what I learned today.</p>
<ul className="mt-6 space-y-3">
{posts.length === 0 && <li className="text-slate-500">No posts yet. (Add /journal API later)</li>}
{posts.map((p) => (
<li key={p.slug} className="rounded-xl border bg-white p-4">
<a className="text-blue-600 hover:underline" href={`/journal/${p.slug}`}>{p.title}</a>
<div className="text-xs text-slate-500">{new Date(p.createdAt).toLocaleDateString()}</div>
</li>
))}
</ul>
</section>
)
}