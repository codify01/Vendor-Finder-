import React from 'react'
import Sixthimg from '../assets/Myimages/Sixthimg.png'

const SixthSection = () => {
  return (
    <>
     <div className='bg-white w-100 items-center p-16 pt-32 flex '>
    
    <div className='w-[60%] mx-auto flex justify-center items-center ml-20'>
    <img src= {Sixthimg} alt="" className=' h-[80vh]' />
    </div>

    <div className='ml-24'> 
    <h1 className='h-16 text-4xl font-bold'>Event venues</h1>
    <p className='h-28 w-[60%] '>Most times getting a venue for an event takes time, energy and resources. We make your events easier for you by relieving you of the stress of searching for a venue.</p>
    <a href="#" className='text-[#628cb4]'> View vendors</a>

    </div>

    </div>

    </>
  )
}

export default SixthSection