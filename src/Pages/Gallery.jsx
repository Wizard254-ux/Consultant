import React from 'react'
import Navbar from '../Components/Navbar'
import GallerySection from '../Components/GallerySection'
import Footer from '../Components/Footer'

function Gallery({isSideBar,displaySideBar}) {
  return (
    <>
    <Navbar isSideBar={isSideBar} displaySideBar={displaySideBar} />
    <GallerySection/>
    <Footer/>
    </>
  )
}

export default Gallery