import React from 'react'
import Thirdimage from '../assets/Myimages/thirdimg.png'
import Maskgroup from '../assets/Myimages/Maskgroup.png'

const ThirdSection = () => {
  return (
    <>
    <div className='relative items-center h-[200vh]  '>


        <img src={Thirdimage} alt="" className='w-full '/>

        <div className=' mx-auto flex justify-center items-center absolute top-[20%] p-40  '>

        <div className='w-[50%]'> 
        <h1 className='h-16 text-4xl font-bold'>Entertainment</h1>
        <p className='h-28 w-[70%] '>Entertainment is the soul of every event. What’s an event without a little or an abundance of entertainment? Come let us add some spice and make your events soulful.</p>
        <a href="#" className=' text-[#628cb4]'> View vendors</a>
        {/* <a href="#" className='text-white bg-[#FF6B6B] px-8 py-2 rounded-full'>View vendors</a> */}
        </div>

            <div>
        <img src={Maskgroup} alt="" className=' '/>
        </div>

        </div>

    
</div>
    

    </>
  )
}


export default ThirdSection