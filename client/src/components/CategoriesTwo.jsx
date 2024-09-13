import React from 'react'

function CategoriesTwo() {
  return (
    <>
    <div>
        <h1 className='items-center text-2xl text-center pt-24'>Find your ideal vendors for a spectacular event...</h1>
    </div>




  <div className='flex flex-row justify-center items-center pt-10'>


    <div className='w-1/3 h-14 rounded-lg border-2 border-[#9f9f9f]'>
      <input className='w-96 h-full rounded-lg border-none outline-none pl-3' type="search" name="search" id="" placeholder='Search for vendors...' />
    </div>

    <div className='absolute ml-96 '>
      <button className='w-28 h-10 rounded-lg bg-[#0e508c] text-white'>Search</button>
    </div>


  </div>



  <div>
        <h1 className='items-center font-bold text-[#9f9f9f] text-center pt-5'>or choose a category to quickly find the help you need</h1>
    </div>


    </>
  )
}

export default CategoriesTwo