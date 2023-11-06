import React, { useState } from 'react'
import {Link as ScrollLink} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const [hamburger , setHamburger]=useState(false);
const Link=[
  {id:1,
  link:"home"
  },
  {id:2,
  link:"about"
  },
  {id:3,
  link:"portfolio"
  },
  {id:4,
  link:"technologies"
  },
  {id:5,
  link:"contact"
  },
]
  return (
    <div className='flex justify-between items-center w-full h-20 bg-black text-white fixed'>
    <div>
      <h2 className='font-signature text-4xl mt-2'>Debasmita</h2>
    </div>
    <ul className='hidden md:flex'>
      {Link.map(({id,link})=>(
 <li key={id} className='px-4 text-lg cursor-pointer font-medium text-gray-500 capitalize hover:scale-105 duration-200'>
  <ScrollLink to={link} smooth duration={400}>{link}</ScrollLink>
 </li>
      ))}
    </ul>
    <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={()=>setHamburger (!hamburger )}>
        {hamburger  ? <FontAwesomeIcon icon={faTimes} size='2xl'/> :  <FontAwesomeIcon icon={faBars} size="2xl"/>}
    </div>
    {hamburger  && ( 
       <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500 '>
       {Link.map(({id,link})=>(
    <li key={id} className='capitalize py-4 text-4xl cursor-pointer px-4 hover:scale-105 duration-200'>
       <ScrollLink onClick={()=>setHamburger(!hamburger)} to={link} smooth duration={400}>{link}</ScrollLink>
    </li>
         ))}
       </ul>
    ) }
   
    </div>
  )
}

export default Navbar
