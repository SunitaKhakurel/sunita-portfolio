import { Link } from 'react-router-dom'


export default function NotFound() {
return (
<section className="text-center">
<h1 className="text-3xl font-bold">404 — Not Found</h1>
<p className="text-slate-600">That page doesn’t exist.</p>
<Link to="/" className="mt-4 inline-block rounded-xl border px-4 py-2 hover:bg-slate-50">Go Home</Link>
</section>
)
}