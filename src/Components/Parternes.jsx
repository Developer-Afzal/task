import React from 'react';
import profile from '../assets/Images/profile.svg';
import left_arrow from '../assets/Images/left_arrow.svg';
import right_arrow from '../assets/Images/right_arrow.svg';
const Parternes = () => {
  return (
    <>
      <div className='Testmonials-Block'>
        <div className='text-center'>
        <p className='l-font font24'>What partners says about us</p>
        <p className='s-font px-3 px-sm-0'>We Create dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod…</p>
      </div> 
      <div className='Flex flex-wrap'>
        <div className='Testmonials-profile'>
          <img src={profile}/>
        </div>
        <div className='Testmonials-content'>
            <p className='l-font fw800'>Marshell B.</p>
            <p className='xm-font'>Lead Developer</p>
            <p className='s-font'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p className='text-center text-sm-start'><img src={left_arrow}/>
            <img src={right_arrow}/></p>
        </div>
      </div>
        </div>
    </>
  )
}

export default Parternes