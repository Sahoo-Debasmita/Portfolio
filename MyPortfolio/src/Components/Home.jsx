import React from 'react'
import {Link as ScrollLink } from 'react-scroll'
import  Hero from '../assets/Heroagain.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'> 
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> Hello, I am Debasmita</h2>
                <p className='text-gray-500 py-5 max-w-lg'>
                An IT grad from Ravenshaw University, Cuttack. I am passionate about IT, and I'm on a journey to master web development. My portfolio showcases my dedication to the ever-evolving world of technology.</p>
            <div>
            <ScrollLink to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center justify-center text-xl rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Portfolio 
                <span className='group-hover:rotate-90 duration-300'>
                    <FontAwesomeIcon icon={faAngleRight} size='1x' className='ml-2' />
                </span>
             </ScrollLink>
            </div>
            </div>
            <div>
                <img src={Hero} alt="Photo" className='mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home
