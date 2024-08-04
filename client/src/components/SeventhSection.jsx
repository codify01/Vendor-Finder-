import React from 'react'
import Facebook from '../assets/Myimages/Facebook.png'
import Instagram from '../assets/Myimages/Instagram.png'
import Twitter from '../assets/Myimages/Twitter.png'
import Logo from '../assets/Myimages/Logo.png'

const SeventhSection = () => {
  return (
    <>

<div className='bg-[rgb(4,23,42)] w-100 items-center p-16 pt-32'>

        <div className='w-[90%] mx-auto flex gap-56 text-white leading-[20%]'>

          <div>
            <h1 className='font-bold text-2xl'>Company</h1>
            <p className='font-semibold text-2xl'>FAQ</p>
            <p className='font-semibold text-2xl'>About Us</p>
            <p className='font-semibold text-2xl'>Services</p>
            <p className='font-semibold text-2xl'>Categories</p>
          </div>

          <div>
            <h2 className='font-bold text-2xl'>Contact Us</h2>
            <p className='font-semibold text-2xl'>2349065531000</p>
            <p className='font-semibold text-2xl'>vendorfinder@gmail.com</p>
            <p>
              <span><img src={Twitter} alt="" /></span>
              <span><img src={Facebook} alt="" /></span>
              <span><img src={Instagram} alt="" /></span>
            </p>
          </div>

          <div>
            <img src={Logo} alt="" />
          </div>
       
        </div>

        <p className=' text-center text-white text-2xl mt-32'>© VendorFinder 2023, All Right Reserved.</p>
      
       
</div>

    </>
  )
}

export default SeventhSection