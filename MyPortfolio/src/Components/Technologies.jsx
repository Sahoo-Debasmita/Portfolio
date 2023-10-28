import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import Tailwind from '../assets/tailwind.png'
import ReactImage from '../assets/react.png'
import Github from '../assets/github.png'

const Technologies = () => {
  const Technologies=[
    {
      id:1,
      src:HTML,
      Name:"HTML",
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:CSS,
      Name:"CSS",
      style:"shadow-blue-700"
    },
    {
      id:3,
      src:JS,
      Name:"JavaScript",
      style:"shadow-yellow-500"
    },
    {
      id:4,
      src:ReactImage,
      Name:"React",
      style:"shadow-blue-400"
    },
    {
      id:5,
      src:Tailwind,
      Name:"Tailwind",
      style:"shadow-blue-200"
    },
    {
      id:6,
      src:Github,
      Name:"Github",
      style:'shadow-white'
    },
  ]
  return (
    <div name="Technologies" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
       <div className='max-w-screen-lg mx-auto p-4 text-white w-full h-full flex flex-col justify-center'>
        <div>
            <p className='text-4xl font-bold border-b-4 inline border-gray-500'>Technologies</p>
            <p className='py-6 text-lg'>These are some technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 gap-8 sm:grid-cols-3 px-12 py-8 text-center sm:px-0'>
          {
            Technologies.map(({id,src,style,Name})=>(
              <div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg py-2 ${style}`}>
              <img src={src} alt="" className='w-40 mx-auto' />
              <p className='mt-4 italic'>{Name}</p>
          </div>
            ))
          }
          
        </div>
       </div>
    </div>
  )
}

export default Technologies
