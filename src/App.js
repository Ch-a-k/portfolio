import './App.css'
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Resume from "./components/resume/Resume"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Skills from './components/skills/Skills'
import Certificates from './components/certificates/Certificates'

function App() {
  return (

    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

export default App
