import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='font-light text-white antialiased selection:bg-line-300 selection:text-black'>
      <Navbar />
      <Hero />
      <Marquee />
      <Project />
      <About />
      <Contact />
    </main>
  )
}

export default App