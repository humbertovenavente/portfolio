import Hero from '@/components/Hero'
import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

