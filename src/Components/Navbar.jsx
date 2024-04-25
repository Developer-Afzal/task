import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Col, Row, Stack} from 'react-bootstrap'
import location from '../assets/Images/location.svg'
import msg from '../assets/Images/msg.svg'
import Call from '../assets/Images/Call.svg'
import facebook from '../assets/Images/facebook.svg'
import Youtube from '../assets/Images/Youtube.svg'
import twitter from '../assets/Images/twitter.svg'
import Whatsapp from '../assets/Images/Watsapp.svg'
import Linkedin from '../assets/Images/linkedin.svg'
import Logo from '../assets/Images/logo.svg'
import DownArrow from '../assets/Images/downArrow.svg'
import CategoryIcon from '../assets/Images/CategoryIcon.svg'
import purplecircle from '../assets/Images/purplecircle.svg'
import Cart from '../assets/Images/Cart.svg'
import WishlistIcon from '../assets/Images/WishlistIcon.svg'
const Navbar = () => {
let num = 3323.2323;
console.log(Math.trunc(num));
  return (
    <Container  className='nav-Block m-0 ' fluid>
      <Row className='upperContent'>
        <Col className="d-flex col-12 col-sm-6">
        <p className='info FSsm'><img src={location}/> 589 5th Ave, NY 10024, USA</p>
        <p className='info FSsm'><img src={msg}/>info@skillgrodemo.com</p>
        </Col>
        <Col className="d-flex col-12 col-sm-6">
          <p className='FSsm p-0'><img src={Call}/>Call us:+123 599 8989</p>
          <p className='FSsm ps-3'>Follow Us On :
            <img src={facebook}/>
            <img src={twitter}/>
            <img src={Whatsapp}/>
            <img src={Linkedin}/>
            <img src={Youtube}/>
          </p> 
        </Col>
      </Row>
      <Row className='nav-LowerContent'>
        <Col className='border-2 col-4 col-lg-2'>
        <img className='logo w-100' src={Logo}/>
        </Col>
        <Col className=' col-12 col-lg-4  d-lg-block order-3 order-lg-0'>
        <ul className='d-inline d-sm-flex'>
            <li>Home <img src={DownArrow}DclassName='DownArrow'/></li>
            <li>Courses <img src={DownArrow} className='DownArrow'/></li>
            <li>Pages <img src={DownArrow} className='DownArrow'/></li>
            <li>Shop <img src={DownArrow} className='DownArrow'/></li>
            <li>Blog <img src={DownArrow} className='DownArrow'/></li>
          </ul>  
        </Col>
        <Col className='col-12 col-lg-4 order-2 d-lg-block order-lg-0 searchBar-Block'>
        <div className='searchBar d-flex w-100'>
            <img src={CategoryIcon}/>
            <span>Categories</span>
            <img src={DownArrow} className='DownArrow'/>
            <input placeholder='Search For Course . . .'/>
            <img src={purplecircle}/>
          </div>
        </Col>
        <Col className=' col-7 col-lg-2 order-1 order-lg-0 p-0 m-0 text-end'>
        <div className='user'>
            <img src={WishlistIcon} alt="WishlistIcon" className='WishlistIcon'/>
            <img src={Cart} className='Cart'/>
            <button className='btn'>Log in</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar