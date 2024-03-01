import React from 'react'
import Editor from '../assets/Images/editor.png'
import Award from '../assets/Images/Award.svg'
import FreeAccount from '../assets/Images/free-account.svg'
import musk_img from '../assets/Images/musk-img.svg'
import response_status from '../assets/Images/response-status.svg'
import baaner_house from '../assets/Images/baaner-house.svg'
import elipes_group from '../assets/Images/elipes-group.svg'
import {Button} from 'react-bootstrap';
import playicon from '../assets/Images/playicon.svg'
import leads from '../assets/Images/leads.svg'



const Banner = () => {
  return (
    <div className='bannerBlock Flex'>
        <div className='text-center bannerContent'>
          <p className='bannerContent_heading'>
          Become a Referrizer <br/>
          API Integration Partner
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <Button className='btn btn-primary' style={{ backgroundColor: '#fff', borderColor: 'green', color:'#4C70F0' }}>Get Started</Button>
          <Button className='btn btn-primary' style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}><img src={playicon}/> Play Video</Button>
        </div>
        <div className='editor'>
          <div className='editor-header w-100'>
            <img src={elipes_group}/>
          </div>
          <img src={Editor} className='w-100'/>
        </div>
        <div className='position-absolute FreeAccount'><img src={FreeAccount} className='bann-img'/></div>
        <div className='position-absolute Award'><img src={Award} className='bann-img' /></div>
        <div className='position-absolute leads'><img src={leads}/></div>
        <img src={baaner_house} className='position-absolute baaner_house'/>
        <img src={musk_img} className=' position-absolute musk_img'/>
        <div className='position-absolute response_status'> <img src={response_status} className='bann-img'/></div>
    </div>
  )
}

export default Banner