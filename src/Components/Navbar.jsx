import React from 'react'
import Logo from '../assets/Images/logo.svg'
import { Link } from 'react-router-dom'
import searchIcon from '../assets/Images/searchIcon.svg'
import menuIcon from '../assets/Images/menuIcon.svg'

const Navbar = () => {
  return (
    <div className='NavBlock Flex'>
        <div className='NavContent Flex'>
            <div><img src={Logo}/></div>
            <div className='Flex'>
              <img src={searchIcon} className='searchIcon d-sm-none'/>
              <img src={menuIcon} className='d-sm-none'/>
            </div>
            <div className='Flex NavContent_menu d-none d-sm-flex'>
                <Link>Solutions</Link>
                <Link>Pricing</Link>
                <Link>Testimonials</Link>
                <Link>Resources</Link>
            </div>
            <div className='NavContent_Left Flex d-none d-sm-flex'>
                <button className='btn btn-primary' style={{background:'transparent', border:'2px solid #4C70F0', color:'#4C70F0'}}>Log in </button>
                <button className='btn btn-primary ms-1' style={{background:'#4C70F0', color:'#ffffff'}}>Sign Up for Free</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar