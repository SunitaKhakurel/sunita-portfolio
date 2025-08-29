import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Journal from './pages/Journal'
import PostDetail from './pages/PostDetail'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Now from './pages/Now'
import NotFound from './pages/NotFound'


export default function App() {
return (
<Routes>
<Route element={<Layout />}>
<Route index element={<Home />} />
<Route path="projects" element={<Projects />} />
<Route path="projects/:slug" element={<ProjectDetail />} />
<Route path="journal" element={<Journal />} />
<Route path="journal/:slug" element={<PostDetail />} />
<Route path="about" element={<About />} />
<Route path="resume" element={<Resume />} />
<Route path="contact" element={<Contact />} />
<Route path="now" element={<Now />} />
<Route path="*" element={<NotFound />} />
</Route>
</Routes>
)
}