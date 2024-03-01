import React from 'react'
import slak from '../assets/Images/slak.svg';
import twitter from '../assets/Images/twitter.svg'
import textFile from '../assets/Images/file-text.svg'
import WhatsApp from '../assets/Images/WhatsApp.svg';
import red_circule from '../assets/Images/red_circule.svg';
import salesforce from '../assets/Images/salesforce.svg';
import Atlassian from '../assets/Images/Atlassian.svg';
import img_1 from '../assets/Images/img_1.svg';
import editor_1 from '../assets/Images/editor_1.svg'
import android from '../assets/Images/android.svg'
import java from '../assets/Images/java.svg'
import python from '../assets/Images/python.svg'
import angular from '../assets/Images/angular.svg'
import JS_icon from '../assets/Images/JS.svg'
import Apple from '../assets/Images/apple.svg'
import code_img1 from '../assets/Images/code_img1.svg'
import orangeIcon from '../assets/Images/orange.svg'
import code from '../assets/Images/code.svg'
import bing from '../assets/Images/bing.svg'
import red_circle2 from '../assets/Images/red_circle2.svg'
import G1icon from '../assets/Images/G1.svg'
import G2icon from '../assets/Images/G2.svg'
import G3icon from '../assets/Images/G3.svg'
import G4icon from '../assets/Images/G4.svg'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Marketplace = () => {
  return (
    <div>
      <div className='position-relative marketplaceBlock Flex'>
      <img  className="position-absolute img1 " src={orangeIcon}/>
      <img  className="position-absolute img2" src={WhatsApp}/>
      <img className="position-absolute img3" src={red_circule}/>
      <img className="position-absolute img4" src={red_circle2}/>
      <img className="position-absolute img5" src={slak}/>
       <div className='text-center'>
       <p className='xs-font'>App Partners</p>
        <p className='l-font font24 p-sm-0 p-2'>Join our thriving App Marketplace</p>
        <p className='s-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet.</p>
       </div>
      <img className="position-absolute img6" src={G1icon}/>
      <img className="position-absolute img7" src={twitter}/>
      <img className="position-absolute img8" src={G2icon}/>
      <img className="position-absolute img9" src={bing}/>
      <img  className="position-absolute img10" src={salesforce}/>
      <img className="position-absolute img11" src={G3icon}/>
      <img className="position-absolute img12" src={G4icon}/>
      <img className="position-absolute img13" src={Atlassian}/>
      </div>
      <Container >
        <Row >
          <Col xs={12} sm={4} className='offset-sm-1'>
            <p className='xs-font text-center text-sm-start'>Tools & Resourses</p>
            <p className='l-font font24 text-center text-sm-start'>Tools & Other Resourses</p>
            <p className='s-font text-center text-sm-start'>Consectetur adipiscing elit, consectetur adipiscing amet.</p>
            <p className='m-font'>Visual Builder</p>
            <p className='m-font'>Videos library</p>
            <p className='s-font'>Lorem ipsum dolor sit amet, consectetur laoreet.  Video library of what our customers say, Tutorials, App integration and more.</p>
            <p className='xs-font' >View More</p>
            <p className='m-font'>Quick Support</p>
          </Col>
          <Col xs={12} sm={6} className='offset-sm-1'>
            <img src={img_1} className='w-100 w-sm-0'/>
          </Col>
        </Row>
      </Container>
      <Container fluid className='Resourses'>
      <Col className='text-center mt-4'>
        <p className='xs-font'>Dev Docs</p>
        <p className='l-font font24'>Dev Documentaion<br/>Integrate your application in minutes</p>
        <p className='s-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet.</p>
        </Col>
        <Col className='text-center'>
          <img className='w-sm-0 w-100' src={editor_1}/>
        </Col>
        <Col className='tech-block Flex p-3'>
          <div className='text-center d-none d-sm-block'> <div className='icon_box Flex'><img src={android}/></div><p className='m-font'>Java</p></div>
          <div className='text-center d-none d-sm-block'> <div className='icon_box Flex'><img src={java}/></div><p className='m-font'>Node.JS</p></div>
          <div className='text-center d-none d-sm-block'> <div className='icon_box Flex'><img src={python}/></div><p className='m-font'>Angular</p></div>
          <div className='text-center d-none d-sm-block'><div className='icon_box Flex'><img src={angular}/></div><p className='m-font'>Python</p></div>
          <div className='text-center'><div className='icon_box Flex'><img src={JS_icon}/></div><p className='m-font'>Android</p></div>
          <div className='text-center d-none d-sm-block'><div className='icon_box Flex'><img src={Apple}/></div><p className='m-font'>API Ref</p></div>
          <div className='text-center'><div className='icon_box Flex'><img src={code_img1}/></div><p className='m-font'>IOS</p></div>
         <div className='text-center'><div className='icon_box Flex'><img src={code}/></div><p className='m-font'>More</p></div>
        </Col>
        <Col className='text-center p-0'>
          <Button className='btn' style={{background:'transparent', color:'#4C70F0'}}><img src={textFile}/>View Dev docs</Button>
        </Col>
      </Container>
    </div>
  )
}

export default Marketplace