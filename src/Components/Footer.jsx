import React from 'react';
import footer_LOGO from '../assets/Images/footer_LOGO.svg'
import {Link} from 'react-router-dom'
import twitter1 from '../assets/Images/twitter1.svg'
import instagram from '../assets/Images/instagram.svg'
import facebook from '../assets/Images/facebook.svg'
import linkedin from '../assets/Images/linkedin.svg'
import youtube from '../assets/Images/youtube.svg'
import {Container, Col, Row} from 'react-bootstrap'

const Footer = () => {
  return (
   <div className='footer_Block'>
    <div className='footerUpper-Content d-flex flex-wrap justify-content-between'>
      <div className='left-content'>
        <img src={footer_LOGO} alt='footer-logo'/>
      </div>
      <div className='Flex flex-wrap right-content'>
        <div>
          <p className='fw700'>Company</p>
          <p><Link to="/task" className='link'>About Us</Link></p>
          <p> <Link to="/task" className='link'>We’re Hiring</Link></p>
          <p><Link to="/task" className='link'>Investors</Link></p>
          <p><Link to="/task" className='link'>Contact</Link></p>
        </div>
        <div>
          <p className='fw700'>solutions</p>
          <p><Link to="/task" className='link'>Customer Lead Generation</Link></p>
          <p><Link to="/task" className='link'>Customer Retention Boost</Link></p>
          <p><Link to="/task" className='link'>Reputation Manageent</Link></p>
          <p><Link to="/task" className='link'>Marketing Automation</Link></p>
          <p><Link to="/task" className='link'>PartnerUp Network </Link></p>
          
        </div>
        <div>
          <p className='fw700'>Resources</p>
          <p><Link to="/task" className='link'>Blog</Link></p>
          <p><Link to="/task" className='link'>Videos</Link></p>
          <p><Link to="/task" className='link'>Case Studies</Link></p>
          <p><Link to="/task" className='link'>Marketplace</Link></p>
          <p><Link to="/task" className='link'>Industries</Link></p>

        </div>
        <div>
          <p className='fw700'>Help</p>
          <p><Link to="/task" className='link'>Support</Link></p>
          <p><Link to="/task" className='link'>Knowledge Base</Link></p>
          <p><Link to="/task" className='link'>Live Chat</Link></p>
        </div>
        <div>
          <p className='fw700'>Partners</p>
          <p><Link to="/task" className='link'>Development Partners</Link></p>
          <p><Link to="/task" className='link'>Affiliate Program</Link></p>
          <p><Link to="/task"className='link' >Partner Offers</Link></p>

        </div>
      </div>
    </div>
    <Container className='footerLower-Content'>
     <Row>
     <Col xs={12} sm={7} className='text-center text-sm-start'>
        <img src={linkedin}/>
        <img src={twitter1} className='lMargin'/>
        <img src={instagram} className='lMargin'/>
        <img src={facebook} className='lMargin'/>
      </Col>
      <Col xs={12} sm={5} className='text-sm-end sm-font text-center '>
        <span>© 2013-2021 Referrizer Inc.</span>
        <span>Login</span>
        <span>Sign up for free</span>
      </Col>
     </Row>
    </Container>
   </div>
  )
}

export default Footer