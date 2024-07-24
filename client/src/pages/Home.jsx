import React from 'react'
import wed from '../assets/imgaes/wed.jpeg'
import Hero from '../components/Hero';
const Home = () => {
 
  return (
    <>
      <Hero/>
      <div className='container flex flex-col justify-between items-center bg-blac py-10'>
        <div className='relative m-5'>
          <div className='w-[150px] h-[150px] bg-[#EFBC88] absolute -top-2.5 -left-2.5 rounded-l-md'>
          </div>
          <div className='  relative z-10'>
            <img src={wed} alt="" className='w-[575px] h-[520px] object-cover object-center'/>
          </div>
        </div>
        <div className='md:w-[40%] p-3 space-y-5'>
          <p>Eliminate the Hassle of Event Planning</p>
          <h1 className='text-2xl font-bold playFair tracking-wide'>Embrace Seamless Celebrations!</h1>
          <p>
          We facilitate memorable and successful events by providing a diverse and curated selection of vendors, ensuring that every client finds the perfect match for their specific event requirements.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home