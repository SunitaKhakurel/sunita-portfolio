export const API = import.meta.env.VITE_API_URL || 'http://localhost:3001';


export async function getProjects() {
const res = await fetch(`${API}/projects`);
if (!res.ok) throw new Error('Failed to fetch projects');
return res.json();
}


export async function getProject(slug: string) {
const res = await fetch(`${API}/projects/${slug}`);
if (!res.ok) throw new Error('Project not found');
return res.json();
}


// Journal endpoints can be added later when your backend exposes them
export async function getJournal() {
const res = await fetch(`${API}/journal`);
if (!res.ok) return [];
return res.json();
}