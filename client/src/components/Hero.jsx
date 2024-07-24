import React from 'react'
import bannerBg from '../assets/imgaes/eventimage.jpeg'
const Hero = () => {
    const myBgStyle = {
		backgroundImage: `url(${bannerBg})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover ',
		backgroundRepeat: 'no-repeat',
	};
  return (
    <div className='relative'style={myBgStyle}>
      <div className={`p-4 lg:w-[600px] mx-auto text-left md:text-center space-y-12 relative z-10 text-white h-[500px] md:h-[700px] place-content-center`} >
          <h1 className='text-4xl   font-bold tracking-wide playFair'>Find The Right Vendors To Make Your Event Exceptional</h1>
          <button className='bg-[#0C4E8B] p-2 text-white rounded'>Hire a Vendor</button>
      </div>
      <div className='bg-[#04172ACC] opacity-[90%] absolute inset-0 z-0'></div>
    </div>
  )
}

export default Hero