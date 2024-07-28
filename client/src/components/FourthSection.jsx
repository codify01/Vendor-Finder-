import React from 'react'
import Fourthimg from '../assets/Myimages/Fourthimg.png'

const FourthSection = () => {
  return (
    <>
    <div className='bg-white w-100 items-center p-16 pt-32 flex '>
    
    <div className='w-[60%] mx-auto flex justify-center items-center ml-20'>
    <img src= {Fourthimg} alt="" className=' h-[80vh]' />
    </div>

    <div className='ml-24'> 
    <h1 className='h-16 text-4xl font-bold'>Photography</h1>
    <p className='h-28 w-[60%] '>Pictures are physical memories. They are a part of us. They capture the moment and tell a story. Every event needs pictures to capture every moment be it small or big. We have just the right photographers.</p>
    <a href="#" className='text-[#628cb4]'> View vendors</a>

    </div>

    </div>
    </>
  )
}

export default FourthSection