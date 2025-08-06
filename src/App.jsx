import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Loader from './components/Loader'
import Skills from './components/Skills'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const [loading, setLoading] = useState(true)

  return (
    
    <main className='font-light antialiased bg-soft-black'>
      <ToastContainer />
      {/* {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : ( */}
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
        </>
      {/* )} */}
    </main>
  )
}

export default App
