import { NavLink } from 'react-router-dom'


const nav = [
{ to: '/', label: 'Home' },
{ to: '/projects', label: 'Projects' },
{ to: '/journal', label: 'Journal' },
{ to: '/about', label: 'About' },
{ to: '/resume', label: 'Resume' },
{ to: '/now', label: 'Now' },
{ to: '/contact', label: 'Contact' },
]


export default function Navbar() {
return (
<header className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b">
<div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
<NavLink to="/" className="font-bold tracking-tight">Sunita Khakurel</NavLink>
<nav className="flex gap-4 text-sm">
{nav.map((item) => (
<NavLink
key={item.to}
to={item.to}
className={({ isActive }) =>
`px-2 py-1 rounded-md hover:bg-slate-100 ${isActive ? 'text-blue-600 font-semibold' : 'text-slate-600'}`
}
end={item.to === '/'}
>
{item.label}
</NavLink>
))}
</nav>
</div>
</header>
)
}