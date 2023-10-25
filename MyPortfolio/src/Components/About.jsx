import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div  className='max-w-screen-lg p-4 mx-auto w-full h-full flex flex-col justify-center'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nobis consectetur nemo ipsa et, in ullam laudantium reiciendis quibusdam totam reprehenderit ipsam ut ab dolorem quos minima sint inventore architecto labore asperiores cumque voluptatem sapiente voluptates consequuntur. Enim, sit temporibus, suscipit ipsum cum excepturi, blanditiis iusto deserunt illo maxime modi.</p>
        <br />
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, adipisci. Totam iste perspiciatis deserunt ut tempora, suscipit inventore voluptatibus! Quae in corrupti, cum quod illo vero est dolorum hic esse nihil, exercitationem unde adipisci! Sit ad facilis suscipit optio placeat?</p>
      </div>
    </div>
  )
}

export default About
