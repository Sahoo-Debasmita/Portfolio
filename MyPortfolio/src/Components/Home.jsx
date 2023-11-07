import React from 'react'
import {Link as ScrollLink } from 'react-scroll'
import  Hero from '../assets/Hero.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    const Links = [
        {
          id: 1,
          Icon: <svg className='bg-white text-xl rounded-md p-1' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>,
          href: "https://www.linkedin.com/in/debasmita-sahoo-512287251/",
        },
        {
          id: 2,
          Icon: <svg className='bg-white text-xl rounded-md p-1' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>,
          href: "https://twitter.com/SDEBASMITA_404",
        },
        {
          id: 3,
          Icon: <svg className='bg-white text-xl rounded-md p-1' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>,
          href: "https://github.com/Sahoo-Debasmita",
        },
        {
          id: 4,
          Icon:<svg className='bg-white text-xl rounded-md p-1' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>,
          href: "mailto:sdebasmita974@gmail.com",
        },
        {
          id: 5,
          Icon: <svg className='bg-white text-xl rounded-md p-1' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>,
          href: "/Updated_Resume.pdf",
          download: true,
        },
       
      ]
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row'>
            <div className='flex flex-col justify-center h-fit'> 
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> Hello, I am Debasmita</h2>
                <p className='text-gray-500 py-5 max-w-lg'>
                An IT grad from Ravenshaw University, Cuttack. I am passionate about IT, and I'm on a journey to master web development. My portfolio showcases my dedication to the ever-evolving world of technology.</p>
            <div>
            <ScrollLink to='projects' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center justify-center text-xl rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Projects
                <span className='sm:group-hover:rotate-90 duration-300'>
                    <FontAwesomeIcon icon={faAngleRight} size='1x' className='ml-2' />
                </span>
             </ScrollLink>
            </div>
            </div>

            <div>
                <img src={Hero} alt="Photo" className='mx-auto w-2/3 md:w-full'/>
            </div>

            <div className=' w-full'>
                <ul className='flex items-center justify-around mt-4 xl:hidden'>
                    {
                        Links.map(({id,Icon,href,download})=>(
                            <li key={id}>
                            <a href={href} download={download}>
                                {Icon}
                            </a>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Home
