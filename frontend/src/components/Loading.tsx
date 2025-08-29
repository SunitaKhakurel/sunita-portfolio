export default function Loading() {
return (
<div className="animate-pulse grid gap-4 sm:grid-cols-2">
{Array.from({ length: 4 }).map((_, i) => (
<div key={i} className="rounded-2xl border bg-white p-4">
<div className="h-5 w-1/2 bg-slate-200 rounded" />
<div className="mt-2 h-4 w-3/4 bg-slate-200 rounded" />
<div className="mt-2 h-3 w-1/3 bg-slate-200 rounded" />
</div>
))}
</div>
)
}