import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Technologies from './Components/Technologies'


function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Technologies/>
     <SocialLinks/>
    </>
  )
}

export default App
