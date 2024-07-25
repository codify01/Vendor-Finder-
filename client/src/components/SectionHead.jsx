import React from 'react'
import line from '../assets/line.svg'
const SectionHead = ({headline}) => {
  return (
    <div className='flex items-center gap-2 px-3 container'>
        <img src={line} alt="" />
        <span>{headline}</span>
        <img src={line} alt="" className='rotate-180'/>
    </div>
  )
}

export default SectionHead