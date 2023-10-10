import React from 'react'
import Navbar from './Comonents/Navbar'
import Projects from './Comonents/Projects'
import HeroSection from './Comonents/HeroSection'
import About from './Comonents/About'
import Diploma from './Comonents/Diploma'
import Footer from './Comonents/Footer'
import SectionComp from './Comonents/SectionComp'
import Hire from './Comonents/Hire'
import { Route , Routes } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";


export default function App() {
  return (
    <div>
      <div id='navbar'>
        <Navbar ></Navbar>
      </div>
      <div id='salimdev'>
        <HeroSection></HeroSection>
        <br />
        <div id='about'>
          <About></About>
        </div>
      </div>
      <br />
        <Projects></Projects>
      <br />
      <div id='diploma'>
        <Diploma></Diploma>
      </div>
      <br />
      <div id='hire'>
        <Hire></Hire>
      </div>
      <br />
      <div id='back'>
        <AnchorLink href='#navbar'><button><box-icon name='up-arrow-alt'></box-icon></button></AnchorLink>
      </div>
      <Footer></Footer>
    </div>
  )
}
