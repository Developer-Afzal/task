import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Rightbanner from '../assets/Images/ReftBanner.png'
import YellowBg from '../assets/Images/yellowBg.png'

const Banner = () => {
  return (
    <Container className='banner-Block' fluid>
      <Row className='m-0 p-0'>
        <Col className='LeftBanner d-flex flex-column align-items-start justify-content-center  m-0' sm={6}>
          <h4>Never Stop <span className='yellowBg'>Learning</span><br/> Life Never Stop Teaching</h4>
            <p className='text-start'>
            Every teaching and learning journey is unique Following<br/>
We'll help guide your way.
            </p>
            <button className='BlueButton'>Start Free Trial &rarr;</button>
        </Col>
        <Col className='RightBanner text-start  m-0' sm={6}>
          <img src={Rightbanner}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner