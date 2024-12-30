import About from '@/Components/About';
import Hero from '@/Components/Hero';
import Nav from '@/Components/Nav'
import NavMobile from '@/Components/NavMobile';
import PriceTable from '@/Components/PriceTable';
import Project from '@/Components/Project';
import Services from '@/Components/Services';
import Skills from '@/Components/Skills';
import React, { useState } from 'react';
import Review from '../Components/Review';
import Blog from '@/Components/Blog';


const HomePage = () => {

  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className='overflow-hidden '>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler}/>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Project/>
      <PriceTable/>
      <Review/>
      <Blog/>
    </div>
  )
}

export default HomePage