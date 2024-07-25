import React from 'react'
import Cook from '/images/vendor head cook-min.jpg'


const AllAboutUs = () => {
    return (
        <div className='relative'>
            <div
                className="w-[92%] h-[80vh] ms-16  bg-[rgb(222,242,245)] relative"
                style={{ clipPath: 'polygon(100% 0, 100% 60%, 47% 100%, 0 63%, 0 0)' }}
            >

            </div>
           <div className='absolute -top-5'>
           <div className='flex justify-center items-center gap-16'>
                <div className='basis-1/6'>
                    <h1 className='-rotate-90 '>WHAT WE ARE ALL ABOUT</h1>
                </div>
                <div className='w-[340px] h-[85vh]  border-2'><img src={Cook} className='h-full w-full object-cover object-left z-20' alt="" /></div>
                <div className='basis-3/6'>
                    <h1 className='font-bold text-2xl playFair'>We offer you the best people for your celebrations.
                    </h1>
                    <p className='h-28 w-[50%]'>  We strive to make the vendor selection process seamless, reliable, and enjoyable, ultimately contributing to the success and unforgettable nature of every celebration.</p>
                    <div className='w-80 p-5 text-white gap-10 flex bg-[rgb(48,67,83)] mt-2'>
                        <div>
                            <h1 className='font-bold'>100+</h1>
                            <p>Reliable</p>
                            <p>Vendors</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>200+</h1>
                            <p>Successful</p>
                            <p>Events</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>99%</h1>
                            <p>Client</p>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                    <button className='border border-[rgb(48,67,83)] p-1 mt-2'>view vendors</button>
                </div>

            </div>
           </div>

        </div>
    )
}

export default AllAboutUs