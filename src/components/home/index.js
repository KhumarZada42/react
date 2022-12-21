import React from 'react'
import Footer from '../Footer'
import Art from '../HomeComponents/Art'
import ImgsMainPage from '../HomeComponents/ImgMainPage'
import Recent from '../HomeComponents/Recent'
import ROGaction from '../HomeComponents/ROGaction'
import Slider from '../HomeComponents/Sliders'
import Navbar from '../Navbar'

function HomePageMain() {
  return (
    <>
    <Navbar/>
    <ImgsMainPage/>
    <Slider/>
    <Recent/>
    <ROGaction/>
    <Art/>
    <Footer/>
    </>
  )
}
export default HomePageMain