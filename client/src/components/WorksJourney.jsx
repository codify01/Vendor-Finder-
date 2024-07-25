import React from 'react'
import Bride from '/images/vendor bride.jpg'
import Family from '/images/vendor mother and child-min.jpg'
const WorksJourney = () => {
  return (
    <div className='bg-[rgb(247,236,225)] w-[90%] ms-16 mt-10 '>
    <div className='text-center text-3xl mt-10'>The Journey through our works</div>
    <div className='flex gap-24'>
      <div>
        <div className='w-16 h-16 bg-white ms-16 mt-10'></div>
        <div className='w-60   ms-20 -mt-10'><img src={Bride} alt="" className='w-[400px] h-[250px] object-cover object-top' /></div>
      </div>
      <div className='mt-32 w-3/6 border-2 border-black p-10'>
        <h1>Bespoke Weddings</h1>
        <p>Immerse yourself in the enchantment of our curated weddings, where love and creativity intertwine, brought to life by our talented vendors.</p>
      </div>

    </div>

    <div className='flex gap-24 mt-40'>
      <div className='mt-32 w-3/6 ms-16 border-2 border-black p-10'>
        <h1>Birthday Celebrations</h1>
        <p>
          Ignite your imagination with a glimpse into a remarkable birthday celebration that bursts with joy and wonder organized by our vendors.</p>
      </div>
      <div>
        <div className='w-16 h-16 bg-white  mt-10'></div>
        <div className='w-60  ms-20 -mt-10 ml-5'><img src={Family} alt="" className='h-[250px] w-[400px] object-cover object-left' /></div>
      </div>
    </div>
  </div>
  )
}

export default WorksJourney