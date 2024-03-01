import React from 'react'
import {Button} from 'react-bootstrap';
import Wave from '../assets/Images/wave.svg'
import c1 from '../assets/Images/c1.svg';
import c2 from '../assets/Images/c2.svg';
import c3 from '../assets/Images/c3.svg';
import c4 from '../assets/Images/c4.svg';
import c5 from '../assets/Images/c5.svg';

const Community = () => {
  return (
    <div className='communityBlock position-relative Flex'>
        <img className='c1 position-absolute' src={c1} />
        <img className='c2 position-absolute' src={c2} />
        <img className='c3 position-absolute' src={c3} />
        <img className='c4 position-absolute' src={c4} />
        <img className='c5 position-absolute' src={c5} />
      <div className='text-center'>
      <p className='l-font font24 px-5 px-sm-0' >FREE Account for developers, No cost to join</p>
      <p className='s-font px-5' style={{color:'#fff'}}>Lorem ipsum dolor sit amet, ea vel bonorum facilisis. </p>
      <Button className='btn btn-primary' style={{background:'#ffff', color: '#4C70F0', boder:'#fff'}}> Join the Community</Button>
      </div>
    </div>
  )
}

export default Community