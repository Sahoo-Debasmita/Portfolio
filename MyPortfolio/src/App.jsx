import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import Portfolio from './Components/Portfolio'


function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <SocialLinks/>
    </>
  )
}

export default App
