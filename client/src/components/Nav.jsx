import React from 'react'
// import { Link } from 'react-router-dom'
import Logo from '/images/vendor logo.png'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className='bg-slate-950 h-28 flex justify-between items-center'>
    <div className='w-40 mt-5'> <img src={Logo} alt="" /></div>
    <ol className='text-white flex justify-end gap-16 items-center h-full me-9 text-lg'>
      <li> <Link to="/home" className="text-white">Home</Link></li>
      <li> <Link to="/" className="text-white">About Us</Link></li>
      <li> <Link to="/services" className="text-white">Services</Link></li>
      <li> <Link to="/categories" className="text-white">Categories</Link></li>
      <li> <Link to="/partner" className="text-white">Partner With Us</Link></li>
    </ol>
    </div>
    </>
  )
}

export default Nav