import React from 'react'
import Imelda from '/images/vendor imelda.jpg'
import Dell from '/images/vendor dell-min.jpg'
import Sam from '/images/vendor samson.jpg'

const MeetTheTeam = () => {
  return (
    <div>
    <div>Meet the Team</div>
    <div className='flex ms-16 justify-between'>
      <div className='w-80  border-2 border-black'><img src={Imelda} alt="" />Imelda Onyebueke
        Product Manager</div>
      <div className='w-80  border-2 border-black'><img src={Dell} alt="" />Esther  Bello
        Product Designer</div>
      <div className='w-80  border-2 border-black'><img src={Sam} alt="" />Samson Aderonmu
        Software Developer</div>
    </div>
    </div>
  )
}

export default MeetTheTeam