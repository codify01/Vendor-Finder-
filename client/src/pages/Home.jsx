import React from 'react'
import wed from '../assets/imgaes/wed.jpeg'
import Hero from '../components/Hero';
import PryButton from '../components/PryButton';
import SectionHead from '../components/SectionHead';
const Home = () => {
 
  return (
    <>
      <Hero/>
      <div className='container flex flex-co flex-col-reverse md:flex-row justify-between items-center bg-blac py-10'>
        <div className='relative m-5'>
          <div className='w-[150px] h-[150px] bg-[#EFBC88] absolute -top-2.5 -left-2.5 rounded-l-md'>
          </div>
          <div className='  relative z-10'>
            <img src={wed} alt="" className='w-[575px] h-[520px] rounded object-cover object-center'/>
          </div>
        </div>
        <div className='md:w-[40%] p-3 space-y-5'>
          <p className=''>Eliminate the Hassle of Event Planning</p>
          <h1 className='text-4xl font-bold playFair tracking-wide md:w-[450px]'>Embrace Seamless Celebrations!</h1>
          <p className='md:w-[400px]'>
          We facilitate memorable and successful events by providing a diverse and curated selection of vendors, ensuring that every client finds the perfect match for their specific event requirements.
          </p>
          <PryButton name={'Learn More'}/>
        </div>
      </div>
      <div>
        <SectionHead headline={'Our Services'}/>
        <div className='container px-3 flex flex-col md:flex-row justify-between items-center  space-y-5'>
          <h1 className='text-3xl playFair font-semibold w-[85%] md:w-[400px]'>Your One-Stop Solution For A Hassle-Free Event</h1>
          <div>
            <p className='w-[480px] mb-1'>Our curated collection of vendors ensures that you'll find the perfect match to make your event truly unforgettable. </p>
            <span className='text-pry'>View All Services</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home