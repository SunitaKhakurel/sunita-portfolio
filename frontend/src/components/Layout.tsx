import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout() {
return (
<div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
<Navbar />
<main className="flex-1 mx-auto w-full max-w-6xl px-6 py-10">
<Outlet />
</main>
<Footer />
</div>
)
}