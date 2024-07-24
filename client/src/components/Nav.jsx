import React from 'react'
// import { Link } from 'react-router-dom'
import Logo from '/images/vendor logo.png'
import { Link, NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className='bg-white h-28 flex justify-between items-center container'>
    <NavLink to={'/'}><div className='w-40 mt-5'> <img src={Logo} alt="" /></div></NavLink>
    <ul className='hidden  text-whit md:flex justify-end gap-16 items-center h-full me-9 text-lg'>
      <li> <NavLink to="/" className="text-white">Home</NavLink></li>
      <li> <NavLink to="/about-us">About Us</NavLink></li>
      <li> <NavLink to="/services">Services</NavLink></li>
      <li> <NavLink to="/categories">Categories</NavLink></li>
      <li> <NavLink to="/partner">Partner With Us</NavLink></li>
    </ul>
    </div>
    </>
  )
}

export default Nav