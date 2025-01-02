import React from 'react'
import Navbar from '../Components/Navbar'
import ServicesSection from './../Components/ServicesSection';
import Footer from '../Components/Footer';

function Services({isSideBar,displaySideBar}) {
  return (
    <>
       <Navbar isSideBar={isSideBar} displaySideBar={displaySideBar} />
       <ServicesSection/>
       <Footer/>
    </>
  )
}

export default Services