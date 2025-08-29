export default function Footer() {
return (
<footer className="border-t">
<div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500 flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center sm:justify-between">
<p>© {new Date().getFullYear()} Sunita Khakurel · Sydney, AU</p>
<div className="flex gap-4">
<a className="hover:text-slate-700" href="https://github.com/your-github" target="_blank">GitHub</a>
<a className="hover:text-slate-700" href="https://www.linkedin.com/in/your-linkedin" target="_blank">LinkedIn</a>
<a className="hover:text-slate-700" href="mailto:you@email">Email</a>
</div>
</div>
</footer>
)
}