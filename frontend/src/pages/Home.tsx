import { Link } from 'react-router-dom'


export default function Home() {
return (
<section>
<div className="flex flex-col items-start gap-4">
<span className="text-xs uppercase tracking-widest text-slate-500">Sydney · Open to work</span>
<h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Sunita Khakurel</h1>
<p className="max-w-2xl text-slate-600">
Junior Software Engineer — Java/Spring Boot · React/TypeScript · NestJS · SQL · exploring AWS & AI.
</p>
<div className="flex gap-3">
<a href="/Sunita_Khakurel_Resume.pdf" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">Download CV</a>
<a href="mailto:you@email" className="rounded-xl bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">Contact</a>
<Link to="/projects" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">View Projects</Link>
</div>
</div>


<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
{[{k:'Java/Spring',v:'Strong'},{k:'React/TS',v:'Strong'},{k:'NestJS/SQL',v:'Good'},{k:'AWS/CI-CD',v:'Learning'}].map(({k,v})=> (
<div key={k} className="rounded-2xl border p-4 bg-white">
<p className="text-sm text-slate-500">{k}</p>
<p className="text-lg font-semibold">{v}</p>
</div>
))}
</div>
</section>
)
}