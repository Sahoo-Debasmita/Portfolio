import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
      <div  className='max-w-screen-lg p-4 mx-auto w-full h-full flex flex-col justify-center'>
        <div className='md:pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-10 text-justify'>Hello, I'm Debasmita, a recent graduate with a degree in Information Technology and Management from Ravenshaw University, Cuttack. My journey in the world of IT has just begun, and I'm enthusiastic about building a fulfilling career in this dynamic field. With a strong foundation in web development (HTML, CSS, and JavaScript), I am currently honing my skills in React to create responsive and engaging user interfaces. My passion for technology drives me to constantly learn, adapt, and innovate. I look forward to contributing my expertise and creativity to the ever-evolving IT landscape.</p>
        <br />
        <p className='text-xl italic text-justify'>Feel free to connect with me to explore collaborations and opportunities in the exciting realm of information technology. Let's create, innovate, and shape the future together!</p>
      </div>
    </div>
  )
}

export default About
