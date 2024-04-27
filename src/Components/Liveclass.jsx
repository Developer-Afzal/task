import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RightArrow from '../assets/Images/rightArrow.svg'
import LiveClass from '../assets/Images/LiveClass.png'
const Liveclass = () => {
  return (
    <Container className='LiveClass-section'>
        <Row>
            <Col sm={6} className='Left-Block text-end'>
                <img src={LiveClass} className='LiveClass img-fluid'/>
            </Col>
            <Col sm={6} className='Right-Block px-sm-0'>
                <p className='medium'>Get More About Us</p>
                <p className='SemiBold'>Thousand Of Top <span className='yellowBg'>Courses</span><br/>Now in One Place</p>
                <p className='Regular'>Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this episode of the Smashing Pod we’re talking about Web Platform Baseline.</p>
                <ul className='flex-column justify-content-start align-items-start'>
                    <li><img src={RightArrow} className='right-arrow'/>The Most World Class Instructors</li>
                    <li><img src={RightArrow} className='right-arrow'/>Access Your Class anywhere</li>
                    <li><img src={RightArrow} className='right-arrow'/>Flexible Course Plan</li>
                </ul>
                <button className='BlueButton'>Start Free Trial &rarr;</button>
            </Col>
        </Row>
    </Container>
  )
}

export default Liveclass