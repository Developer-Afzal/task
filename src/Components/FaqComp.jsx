import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Container, Row, Col, Button } from 'react-bootstrap'
import minus from '../assets/Images/minus.svg'
import plus from '../assets/Images/plus.svg'

const FaqComp = () => {
    const [faq, setfaq] = useState(1);
    const faq_Arr=[
        {   id:0,
            title:'Lorem ipsum dummy text here',
            description:"Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos."
        },
        {   id:1,
            title:'Lorem ipsum dummy text here',
            description:"Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos."
        },
        {   id:3,
            title:'Lorem ipsum dummy text here',
            description:"Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos."
        },
        {   id:4,
            title:'Lorem ipsum dummy text here',
            description:"Lorem ipsum dolor sit amet, te est inani solet laoreet, an corpora expetenda democritum has. Ut sit prima laboramus eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri, qui ut periculis argumentum ullamcorper, velit habemus tibique an eos."
        },
    ]
  return (
   <Container>
    <Col className='text-center'>
        <p className='xs-font'>FAQ’s</p>
        <p className='l-font font24'>Frequently Asked Questions</p>
        <p className='s-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet.</p>
    </Col>
    <Col className='text-center'>
        {faq_Arr.map( (itm) => <div key={itm.id}>
                <div className='faq-heading Flex justify-content-between' onClick={()=> setfaq(itm.id) }>
                    <p className='sm-font text-start m-0 '>{itm.title}</p>
                    {itm.id == faq ?<img src={minus}/> : <img src={plus}/>}
                </div>
                <div className='faq-desc' style={{display:itm.id == faq ? 'block' : 'none'}} >
                    <p className='text-start ps-4'>{itm.description}</p>
                </div>
                </div>
            
        )}
    </Col>
   </Container>
  )
}

export default FaqComp