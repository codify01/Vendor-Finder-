import React from 'react'
import Bgimg from '../assets/Myimages/bgfifth.png'
import Fifthimg from '../assets/Myimages/Fifthimg.png'

const FifthSection = () => {
  return (
    <>
    <div className='relative items-center h-[200vh]  '>


<img src={Bgimg} alt="" className='w-full '/>

<div className=' mx-auto flex justify-center items-center absolute top-[20%] p-40  '>

<div className='w-[50%]'> 
<h1 className='h-16 text-4xl font-bold'>Decoration</h1>
<p className='h-28 w-[70%] '>We have decorators that can give your event a very unique look. You can also tailor the decorations to fit your needs and desires. You do the description, we do the action.</p>
<a href="#" className=' text-[#628cb4]'> View vendors</a>
</div>

    <div>
<img src={Fifthimg} alt="" className=' '/>
</div>

</div>


</div>

    </>
  )
}

export default FifthSection