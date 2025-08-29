import { useState } from 'react'


export default function Contact() {
const [status, setStatus] = useState<string | null>(null)


async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault()
const fd = new FormData(e.currentTarget)
const payload = Object.fromEntries(fd.entries())
console.log('Submit contact form', payload)
setStatus('Thanks! I will get back to you soon.')
}


return (
<section>
<h1 className="text-3xl font-bold">Contact</h1>
<form onSubmit={onSubmit} className="mt-6 max-w-lg space-y-4">
<div>
<label className="block text-sm text-slate-600">Name</label>
<input name="name" required className="mt-1 w-full rounded-lg border px-3 py-2" />
</div>
<div>
<label className="block text-sm text-slate-600">Email</label>
<input name="email" type="email" required className="mt-1 w-full rounded-lg border px-3 py-2" />
</div>
<div>
<label className="block text-sm text-slate-600">Message</label>
<textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border px-3 py-2" />
</div>
<button className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Send</button>
</form>
{status && <p className="mt-4 text-green-600">{status}</p>}
</section>
)
}