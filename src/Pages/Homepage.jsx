import React from 'react'
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Marketplace from '../Components/Marketplace';
import Footer from '../Components/Footer';
import FaqComp from '../Components/FaqComp';
import SuccessStory from '../Components/SuccessStory';
import Community from '../Components/Community';
import Parternes from '../Components/Parternes';
const Homepage = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Marketplace/>
        <Parternes/>
        <FaqComp/>
        <Community/>
        <SuccessStory/> 
        <Footer/>
    </>
  )
}

export default Homepage