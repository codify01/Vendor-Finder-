import React from 'react'

import All from '/images/vendor all.jpg'
import Banq from '/images/vendor banquet.jpg'
import Goal from '/images/vendor bs strategy.jpg'
import Cook from '/images/vendor head cook-min.jpg'
import Imelda from '/images/vendor imelda.jpg'
import Dell from '/images/vendor dell-min.jpg'
import Sam from '/images/vendor samson.jpg'
import Bride from '/images/vendor bride.jpg'
import Family from '/images/vendor mother and child-min.jpg'


const AboutUs = () => {
  return (
    <>
      <div className='opacity-30 bg-current-'><img src={All} alt="" />
        {/* <div className='w-32 h-32 border-2 border-black'></div> */}
      </div>
      {/* ondsec */}
      <div className='ms-16 w-11/12 m-10  h-[345px] border-2 border-black inline-block relative'>
        <div className='w-5/12  opacity-50 block'><img src={Banq} className='h-76 ms-10' alt="" /></div>

        <div className='ms-16 w-11/12 m-10  h-72 border-2 -mt-[450px] border-black inline-block relative'></div>
      </div>
      <div className='ms-16 w-11/12 m-10 h-[345px]  h-88 border-2 border-black inline-block relative'>
        <div className='w-5/12  opacity-50 block'><img src={Goal} className='h-76 ms-[650px]' alt="" /></div>
        <div className='ms-16 w-11/12 m-10  h-72 border-2 -mt-[450px] border-black inline-block relative'></div>
      </div>
      <div className='relative'>
      <div
        className="w-[92%] h-[80vh] ms-16  bg-blue-500 relative"
        style={{ clipPath: 'polygon(100% 0, 100% 60%, 47% 100%, 0 63%, 0 0)' }}
      >

      </div>
      <div className=''>
        <div>
          <h1>WHAT WE ARE ALL ABOUT</h1>
        </div>
      <div className='w-64 h-[80vh] border-2 border-black bg-black'><img src={Cook} className='h-full object-cover object-left z-20' alt="" /></div>
      <div className='ms-16 mt-5'>
        <h1 className='font-bold'>We offer you the best people for your celebrations.
      </h1>
        <p className='h-28 w-[30%] border border-black'>  We strive to make the vendor selection process seamless, reliable, and enjoyable, ultimately contributing to the success and unforgettable nature of every celebration.</p>
        <div className='w-20 h-20 bg-[rgb(48,67,83)]'></div>
      </div>

      </div>
     
      </div>
      <div>Meet the Team</div>
      <div className='flex ms-16 justify-between'>
        <div className='w-80  border-2 border-black'><img src={Imelda} alt="" />Imelda Onyebueke
          Product Manager</div>
        <div className='w-80  border-2 border-black'><img src={Dell} alt="" />Esther  Bello
          Product Designer</div>
        <div className='w-80  border-2 border-black'><img src={Sam} alt="" />Samson Aderonmu
          Software Developer</div>
      </div>
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


      {/* <div className=' w-10/12 m-3 -mt-24 border border-red-500'></div>  */}


      {/* <div className=' w-10/12 m-3 -mt-24 border border-black'></div> */}
      {/* </div> */}
    </>
  )
}
export default AboutUs