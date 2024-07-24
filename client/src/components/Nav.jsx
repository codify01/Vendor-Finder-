import React from 'react'
// import { Link } from 'react-router-dom'
import Logo from '/images/vendor logo.png'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className='bg-white h-28 flex justify-between items-center container'>
    <div className='w-40 mt-5'> <img src={Logo} alt="" /></div>
    <ul className='hidden  text-whit md:flex justify-end gap-16 items-center h-full me-9 text-lg'>
      <li> <Link to="/" className="text-white">Home</Link></li>
      <li> <Link to="/about-us">About Us</Link></li>
      <li> <Link to="/services">Services</Link></li>
      <li> <Link to="/categories">Categories</Link></li>
      <li> <Link to="/partner">Partner With Us</Link></li>
    </ul>
    </div>
    </>
  )
}

export default Nav