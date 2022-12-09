import './App.css'

// import components
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import About from './components/about/about'
import Skills from './components/skills/Skills'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  })
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
