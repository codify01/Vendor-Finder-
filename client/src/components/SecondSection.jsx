import React from 'react'
import Secondimg from '../assets/Myimages/secondimg.png'

const SecondSection = () => {
  return (
    <>

<div className='bg-white w-100 items-center p-16 pt-32 flex '>
    
        <div className='w-[60%] mx-auto flex justify-center items-center ml-20'>
        <img src= {Secondimg} alt=""   />
        </div>

        <div className='ml-24'> 
        <h1 className='h-16 text-4xl font-bold'>Catering</h1>
        <p className='h-20 w-[60%] '>We have various experienced event caterers ready to offer their services at your beck and call! Avoid the stress of finding the best caterer to fit your needs, we are here to help.</p>
        <a href="#" className='text-[#628cb4]'> View vendors</a>
        {/* <a href="#" className='text-white bg-[#FF6B6B] px-8 py-2 rounded-full'>View vendors</a> */}
        </div>

        </div>

    </>
  )
}

export default SecondSection