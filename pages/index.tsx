import About from '@/Components/About';
import Hero from '@/Components/Hero';
import Nav from '@/Components/Nav'
import NavMobile from '@/Components/NavMobile';
import Services from '@/Components/Services';
import React, { useState } from 'react';


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
    </div>
  )
}

export default HomePage