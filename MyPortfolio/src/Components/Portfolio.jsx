import React from 'react'
import Bubble from '../assets/Bubble.jpg'
import MusicPlayer from '../assets/music player.jpg'
import PasswordGenerator from '../assets/password generator.png'
import TailwindCard from '../assets/TailwindCard.png'

const Portfolio = () => {
 const portfolio=[
  {
    id:1,
    src:Bubble,
    Name:"Bubble Game using JS"
  },
  {
    id:2,
    src:MusicPlayer,
    Name:"Mini Music Player"
  },
  {
    id:3,
    src:PasswordGenerator,
    Name:"Random Password Generator"
  },
  {
    id:4,
    src:TailwindCard,
    Name:"FB login page with Tailwind"
  },
 ]

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold border-b-4 inline border-gray-500'>Portfolio</p>
              <p className='py-6 text-lg'>Check out some of my work here</p>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-12 sm:px-0'>
            {portfolio.map(({id,src,Name})=>(
                <div key={id} className='shadow-md shadow-gray-600 x '>
                <img src={src} alt="" className=' w-full h-40 object-cover max-h-screen duration-200 hover:scale-105 rounded-md' />
                <div className='flex justify-center mt-2 font-semibold'>
                {Name}
                </div>
                <div className='flex items-center justify-center'>
                  <button className='bg-blue-700 rounded-xl w-1/2 px-1 py-2.5 m-2 duration-200 hover:scale-105'>Demo</button>
                  <button className='bg-blue-700 rounded-xl w-1/2 px-1 py-2.5 m-2 duration-200 hover:scale-105'>Code</button>
                </div>
              </div>
              ))}
            </div>
          </div>

   </div>
  )
}

export default Portfolio