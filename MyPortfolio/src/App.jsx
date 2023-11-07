import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import Projects from './Components/Project'
import Skill from './Components/Skill'
import Contact from './Components/Contact'


function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <Skill/>
     <Projects/>
     <About/>
     <Contact/>
     <SocialLinks/>
    </>
  )
}

export default App
