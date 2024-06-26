import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/Images/footerLogo.png'
import facebook from '../assets/Images/facebook.svg'
import twitter from '../assets/Images/twitter.svg'
import whatsapp from '../assets/Images/Watsapp.svg'
import linedin from '../assets/Images/linkedin.svg'
import youtube from '../assets/Images/Youtube.svg'

const Footer = () => {
  return (
    <Container className='fotter-section' fluid>
      <Row className='upper-block '>
        <Col sm={4} className='col-12'>
          <img src={logo}/>
          <p>when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.</p>
          <p>463 7th Ave, NY 10018, USA</p>
          <p>+123 88 9900 456</p>
        </Col>
        <Col className='col-6 col-sm-2 col-lg-3 '>
          <p className='heading'>Useful Links</p>
          <p>Our values</p>
          <p>Our advisory board</p>
          <p>Our partners</p>
          <p>Become a partner</p>
          <p>Work at Future Learn</p>
          <p>Quizlet Plus</p>
        </Col>
        <Col sm={3} className='col-6'>
          <p className='heading'>Our Company</p>
          <p>Contact Us</p>
          <p>Become Teacher</p>
          <p>Blog</p>
          <p>Instructor</p>
          <p>Events</p>
        </Col>
        <Col sm={2} className='col-12 col-lg-2'>
          <p className=' semiBold heading'>Get In Touch</p>
          <p>when an unknown printer took galley type and scrambled</p>
          <div className='social-icon d-flex align-items-center '>
          <img src={facebook} />
          <img src={twitter} />
          <img src={whatsapp} />
          <img src={linedin} />
          <img src={youtube} />
          </div>
        </Col>
      </Row>
      <Row className='lower-block text-center text-sm-start'>
        <p>© 2010-2024 skillgro.com. All rights reserved.</p>
      </Row>
    </Container>
  )
}

export default Footer