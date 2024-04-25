import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import C1 from '../assets/Images/C1.svg'
import C2 from '../assets/Images/C2.svg'
import C3 from '../assets/Images/C3.svg'
import C4 from '../assets/Images/C4.svg'
import C5 from '../assets/Images/C5.svg'
import C6 from '../assets/Images/C6.svg'
import BandAd from '../assets/Images/BandAd.svg'


const Category = () => {
  return (
    <Container className='text-center category-section' fluid>
         <Container className='text-center category-Block'>
         <p className='medium'>Trending Categories</p>
          <p className='SemiBold'>Top Category We Have</p>
          <p className='Regular'>when known printer took a galley of type scrambl edmake</p>
        <Row>
            <Col className="Category-itmBlock  d-flex align-items-center" sm={12} >
            <butto className="circulur-button">&larr;</butto>

            <Col className='d-none d-sm-block'>
                <img src={C1} className='w-100'/>
                <p>Graphic Design</p>
                <p>(22)</p>
                </Col> 
                <Col className='d-none d-sm-block'>
                <img src={C2} className='w-100'/>
                <p>Finance</p>
                <p>(41)</p>
                </Col> 
                <Col className='d-none d-sm-block'>
                <img src={C3} className='w-100'/>
                <p>Development</p>
                <p>(29)</p>
                </Col> 
                <Col className='d-none d-sm-block'>
                <img src={C4} className='w-100'/>
                <p>Marketing</p>
                <p>(31)</p>
                </Col>
                <Col>
                <img src={C5} className='w-100'/>
                <p>Life Style</p>
                <p>(23)</p>
                </Col>
                <Col>
                <img src={C6} className='w-100'/>
                <p>Management</p>
                <p>(19)</p>
                </Col>
            <butto className="circulur-button">&rarr;</butto>

            </Col>
            
        </Row>
         </Container>
        <Row sm={12} className='brandAd-section'>
              <img src={BandAd} className='img-fluid'/>
            </Row>
    </Container>
  )
}

export default Category