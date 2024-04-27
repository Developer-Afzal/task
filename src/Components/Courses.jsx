import React from 'react'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardItem1 from '../assets/Images/CardItem1.svg'
import CardItem2 from '../assets/Images/CardItem2.svg'
import CardItem3 from '../assets/Images/CardItem3.svg'
import CardItem4 from '../assets/Images/CardItem4.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Courses = () => {
    let sliderRef = useRef(null);
    // const next = () => {
    //     sliderRef.slickNext();
    //   };
      const previous = () => {
        sliderRef.slickPrev();
      };
    // function SampleNextArrow(props) {
    //     const { className, style } = props;
    //     return (
    //       <div
    //         className={className}
    //         onClick={next}
    //         style={{ ...style, display: "block",  margin:"0  40px 0 0 " }}
    //       />
    //     );
    //   }
    //   function SamplePrevArrow(props) {
    //     const { className, style } = props;
    //     return (
    //       <div
    //         className={className}
    //         onClick={previous}
    //         style={{ ...style, display: "block",  }}
    //       />
    //     );
    //   }
    const carouselControl = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        // nextArrow:<SampleNextArrow/> ,
        // prevArrow:<SamplePrevArrow/>,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // pauseOnHover: true
        responsive:[
            {
                breakpoint:1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            },

            {
                breakpoint:1000,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
            },
            
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              
              },
        ]
      };
    const carouselStyling ={
        
    }
  return (
    <Container className='text-center course-Section' fluid>
        <p className='medium'>Top Class Course</p>
        <p className='SemiBold'>Explore Our World's Best Courses</p>
        <p className='Regular'>When known printer took a galley of type scrambl edmake</p>
        <div className='tab mx-auto'>
            <span className="FSxmd">All Courses</span>
            <span  className="FSxmd">Design</span>
            <span className="FSxmd">Business</span>
            <span className="FSxmd">Development</span>
        </div>
        <Container  className=' slider-container'>
        <Slider className='mx-auto' {...carouselControl} ref={slider => {
          sliderRef = slider;
        }}>
        <Col className='course-item'>
                <img src={CardItem3} className='w-100'/>
                <span>Development</span><span className='float-end pt-1'>(4.8 Reviews)</span>
                <p className='SemiBold'>Learning JavaScript With Imagination</p>
                <button className='BlueButton'>Enroll Now &rarr;</button><span className='float-end pt-1'>$19.00</span>
            </Col>
            <Col className='course-item' >
                <img src={CardItem1} className='w-100'/>
                <span>Design</span><span className='float-end pt-1'>(4.5 Reviews)</span>
                <p className='SemiBold'>The Complete Graphic Design for Beginners</p>
                <button className='BlueButton '>Enroll Now &rarr;</button><span className='float-end pt-1'>$23.00</span>
            </Col>
            <Col className='course-item' >
                <img src={CardItem2} className='w-100'/>
                <span>Marketing</span><span className='float-end pt-1'>(4.3 Reviews)</span>
                <p className='SemiBold'>Learning Digital Marketing on Facebook</p>
                <button className='BlueButton'>Enroll Now &rarr;</button><span className='float-end pt-1'>$34.00</span>
            </Col>
            <Col className='course-item' >
                <img src={CardItem4} className='w-100'/>
                <span>Business</span><span className='float-end pt-1'>(4.8 Reviews)</span>
                <p className='SemiBold'>Financial Analyst Training & Investing Course</p>
                <button className='BlueButton'>Enroll Now &rarr;</button> <span className='float-end pt-1'>$24.00</span>
            </Col>
            <Col className='course-item' >
                <img src={CardItem1} className='w-100'/>
                <span>Design</span><span className='float-end pt-1'>(4.5 Reviews)</span>
                <p className='SemiBold'>The Complete Graphic Design for Beginners</p>
                <button className='BlueButton '>Enroll Now &rarr;</button><span className='float-end pt-1'>$23.00</span>
            </Col>
            <Col className='course-item' >
                <img src={CardItem2} className='w-100'/>
                <span>Marketing</span><span className='float-end pt-1'>(4.3 Reviews)</span>
                <p className='SemiBold'>Learning Digital Marketing on Facebook</p>
                <button className='BlueButton'>Enroll Now &rarr;</button><span className='float-end pt-1'>$34.00</span>
            </Col>
            <Col className='course-item' >
                <img src={CardItem4} className='w-100'/>
                <span>Business</span><span className='float-end pt-1'>(4.8 Reviews)</span>
                <p className='SemiBold'>Financial Analyst Training & Investing Course</p>
                <button className='BlueButton'>Enroll Now &rarr;</button> <span className='float-end pt-1'>$24.00</span>
            </Col>
          
        </Slider>
        {/* <Row className='card-block mx-auto'>
            <Col className='course-item' >
                <img src={CardItem3} className='w-100'/>
                <span>Development</span><span className='float-end pt-1'>(4.8 Reviews)</span>
                <p className='SemiBold'>Learning JavaScript With Imagination</p>
                <button className='BlueButton'>Enroll Now &rarr;</button><span className='float-end pt-1'>$19.00</span>
            </Col>
            <Col className='course-item' >
                <img src={CardItem1} className='w-100'/>
                <span>Design</span><span className='float-end pt-1'>(4.5 Reviews)</span>
                <p className='SemiBold'>The Complete Graphic Design for Beginners</p>
                <button className='BlueButton '>Enroll Now &rarr;</button><span className='float-end pt-1'>$23.00</span>
            </Col>
            <Col className='course-item' >
                <img src={CardItem2} className='w-100'/>
                <span>Marketing</span><span className='float-end pt-1'>(4.3 Reviews)</span>
                <p className='SemiBold'>Learning Digital Marketing on Facebook</p>
                <button className='BlueButton'>Enroll Now &rarr;</button><span className='float-end pt-1'>$34.00</span>
            </Col>
            <Col className='course-item' >
                <img src={CardItem4} className='w-100'/>
                <span>Business</span><span className='float-end pt-1'>(4.8 Reviews)</span>
                <p className='SemiBold'>Financial Analyst Training & Investing Course</p>
                <button className='BlueButton'>Enroll Now &rarr;</button> <span className='float-end pt-1'>$24.00</span>
            </Col>
        </Row> */}
        </Container>
    </Container>
  )
}

export default Courses