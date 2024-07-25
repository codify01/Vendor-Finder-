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
      <NavLink to="/"> <li  className="text-whit">Home</li></NavLink>
      <NavLink to="/about-us"> <li >About Us</li></NavLink>
      <NavLink to="/services"> <li >Services</li></NavLink>
      <NavLink to="/categories"> <li >Categories</li></NavLink>
      <NavLink to="/partner-with-us"> <li >Partner With Us</li></NavLink>
    </ul>
    </div>
    </>
  )
}

export default Nav