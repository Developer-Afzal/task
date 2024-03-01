import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Eyeicon from '../assets/Images/Eye.svg'
import LinedinIcon from '../assets/Images/LinkedInCircled.svg';
import UnionIcon from '../assets/Images/Union.svg';
import invertedComma from '../assets/Images/invertedComma.svg';
import User_1 from '../assets/Images/user_1.svg';
import User_2 from '../assets/Images/user_2.svg';
import User_3 from '../assets/Images/user_3.svg';

const SuccessStory = () => {
    const Storyarr =[
        {
        id:0,
         title:'Helped me grow my small business...',
         description:' It makes it easy to communicate and send out marketing campaigns through email and text templates.',
         userimg:User_1,
         username:'Jason King',
         comment:'Owner at Core & More Fitness'

        },
        {
        id:1,
        title:'All-in-one Marketing Automation...',
        description:' It makes it easy to communicate and send out marketing campaigns through email and text templates.',
        userimg:User_2,
        username:'Meteus Felipe',
        comment:'Owner at Goosebumps Cryotherapy'
       },
       {
        id:3,
        title:" We're able to spread the word about our new promos...",
       description:'Being able to create custom offers that you can email & text to your clients is wonderful! You have so much flexibility in selecting which clients to send the offers to..',
       userimg:User_3,
       username:'Meteus Felipe',
       comment:'Owner at Goosebumps Cryotherapy'
       
      },
      
    ]

  return (
    <Container fluid className='p-0'>
        <Col>
            <p className='l-font text-center font24 pt-4'>Success Stories</p>
            <p className='s-font text-center px-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet.</p>
        </Col>
        <div className='Flex story-section'>
        {Storyarr.map((itm)=>  <div className='storyBlock position-relative' >
        <img src={UnionIcon} className='z-1 position-absolute story-imgBG'/>
        <img className='z-2 position-absolute invertedComma' src={invertedComma}/>
        <div className='z-2 position-absolute storyCard-Content'>
                <p className='xm-font'>
                {itm.title}
            </p>
            <p className='s-font'>{itm.description}</p>
            </div>
            <div className='z-2 position-absolute social-icon'>
                <span className='m-0 xs-f'><img src={LinedinIcon}/>Linkedin</span>
                <span className='ms-3 xs-f'><img src={Eyeicon}/>View story</span>
            </div>
            <div className='z-2 position-absolute  Flex clientinfo-Content'>
                <div>
                    <img src={itm.userimg}/>
                </div>
                <div>
                    <p className='s-font m-0 xs-f'>{itm.username}</p>
                    <p className='sm-font xs-f w-100'>{itm.comment}</p>
                </div>
            </div>
            </div>)}
        </div>
            <Col className='text-center'>
            <Button className="btn btn-primary large-btn" style={{background:'transparent', color:'#4C70F0'}}>Read all Stories</Button>
            </Col>
        
    </Container>
  )
}

export default SuccessStory