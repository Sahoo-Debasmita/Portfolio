import React from 'react'

const Contact = () => {
  return (
    <div name="contact" 
    className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='max-w-screen-lg p-4 flex flex-col justify-center mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold border-b-4 inline border-gray-500'>Contact</p>
            <p className='py-6 text-lg text-justify'>Want to connect? I genuinely look forward to hearing from you. Please share your thoughts and ideas by submitting the form below.</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/b09d07c2-20ec-43ef-b4ce-512d6b92e11b" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" required name='name' placeholder='Enter your name here' className='p-2 focus:outline-none bg-transparent border-2 rounded-md text-white' />
                <input type="email" required name='email' placeholder='Enter your E-Mail here' className='p-2 my-4 focus:outline-none bg-transparent border-2 rounded-md text-white' />
                <textarea name="message" required rows="10" placeholder='Enter your message here'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='bg-gradient-to-b from-cyan-500 to-blue-500 text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact