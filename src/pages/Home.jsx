import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import Services from '../components/Services.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Projects /><Services /><About /><Skills /><Contact />
      </main>
      <Footer />
    </>
  )
}
