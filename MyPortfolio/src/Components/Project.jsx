import React from 'react'
import Bubble from '../assets/Bubblegame.png'
import MusicPlayer from '../assets/music player.jpg'
import PasswordGenerator from '../assets/password generator.png'
import TailwindCard from '../assets/TailwindCard.png'
import Shoppingcart from '../assets/ShoppingCart.png'

const Project = () => {
 const Project=[
  {
    id:1,
    src:Bubble,
    Name:"Bubble Game using JS",
    Link:"https://github.com/Sahoo-Debasmita/Javascript-Projects/tree/master/Bubble%20Game"
  },
  {
    id:2,
    src:MusicPlayer,
    Name:"Mini Music Player",
    Link:"https://github.com/Sahoo-Debasmita/Mini-Music-Player"
  },
  {
    id:3,
    src:PasswordGenerator,
    Name:"Random Password Generator",
    Link:"https://github.com/Sahoo-Debasmita/Javascript-Projects/tree/master/Random%20Password%20Generator"
  },
  {
    id:4,
    src:TailwindCard,
    Name:"FB login page with Tailwind",
    Link:"https://github.com/Sahoo-Debasmita/Tailwind_Projects/tree/main/Facebook_Login_Page"
  },
  {
    id:5,
    src:Shoppingcart,
    Name:"Shopping cart using JS",
    Link:"https://github.com/Sahoo-Debasmita/Javascript-Projects/tree/master/Shopping%20Cart"
  },
 ]

  return (
    <div name="projects"
    className='bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
            <div className='md:pb-8'>
              <p className='text-4xl font-bold border-b-4 inline border-gray-500'>Projects</p>
              <p className='py-6 text-lg'>Check out some of my work here</p>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-12 sm:px-0'>
            {Project.map(({id,src,Name,Link})=>(
                <div key={id} className='shadow-md shadow-gray-600 x '>
                <img src={src} alt="" className=' w-full h-40 object-cover max-h-screen duration-200 hover:scale-105 rounded-md' />
                <div className='flex justify-center mt-2 font-semibold'>
                {Name}
                </div>
                <div className='flex items-center justify-center'>
                 <button className='bg-blue-700 rounded-xl w-full px-1 py-2.5 m-2 duration-200 hover:scale-105' onClick={()=>{window.open(Link)}}>Code Link</button>
                </div>
              </div>
              ))}
            </div>
          </div>

   </div>
  )
}

export default Project
