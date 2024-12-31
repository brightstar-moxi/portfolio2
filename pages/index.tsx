import About from '@/Components/About';
import Hero from '@/Components/Hero';
import Nav from '@/Components/Nav'
import NavMobile from '@/Components/NavMobile';
import PriceTable from '@/Components/PriceTable';
import Project from '@/Components/Project';
import Services from '@/Components/Services';
import Skills from '@/Components/Skills';
import React, { useEffect, useState } from 'react';
import Review from '../Components/Review';
import Blog from '@/Components/Blog';
import Contact from '@/Components/Contact';
import Foot from '@/Components/Foot';
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomePage = () => {

  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  // animation
  useEffect(()=>{

  },[])

  return (
    <div className='overflow-hidden '>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Project />
      <PriceTable />
      <Review />
      <Blog />
      <Contact />
      <Foot />
    </div>
  )
}

export default HomePage