import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardItem1 from '../assets/Images/CardItem1.svg'
import CardItem2 from '../assets/Images/CardItem2.svg'
import CardItem3 from '../assets/Images/CardItem3.svg'
import CardItem4 from '../assets/Images/CardItem4.svg'

const Courses = () => {
  return (
    <Container className='text-center course-Section' fluid>
        <p className='medium'>Top Class Course</p>
        <p className='SemiBold'>Explore Our World's Best Courses</p>
        <p className='Regular'>When known printer took a galley of type scrambl edmake</p>
        <ul className='justify-content-center mx-auto'>
            <li>All Courses</li>
            <li>Design</li>
            <li>Business</li>
            <li>Development</li>
        </ul>
        <Container>
        <Row className='card-block'>
            <Col className='course-item' >
                <img src={CardItem3} className='w-100'/>
                <p className='SemiBold'>Learning JavaScript With Imagination</p>
                <button className='BlueButton'>Enroll Now &rarr;</button>
            </Col>
            <Col className='course-item' >
                <img src={CardItem1} className='w-100'/>
                <p className='SemiBold'>The Complete Graphic Design for Beginners</p>
                <button className='BlueButton'>Enroll Now &rarr;</button>
            </Col>
            <Col className='course-item' >
                <img src={CardItem2} className='w-100'/>
                <p className='SemiBold'>Learning Digital Marketing on Facebook</p>
                <button className='BlueButton'>Enroll Now &rarr;</button>
            </Col>
            <Col className='course-item' >
                <img src={CardItem4} className='w-100'/>
                <p className='SemiBold'>Financial Analyst Training & Investing Course</p>
                <button className='BlueButton'>Enroll Now &rarr;</button>
            </Col>
        </Row>
        </Container>
    </Container>
  )
}

export default Courses