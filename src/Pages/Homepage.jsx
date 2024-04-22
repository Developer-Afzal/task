import React from 'react'
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Category from '../Components/Category';
import Liveclass from '../Components/Liveclass';
import Courses from '../Components/Courses';
const Homepage = () => {
  return (
    <>
          <Banner/>
          <Category/>
          <Liveclass/>
          <Courses/>
    </>
  )
}

export default Homepage