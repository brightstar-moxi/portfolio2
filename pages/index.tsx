import Nav from '@/Components/Nav'
import NavMobile from '@/Components/NavMobile';
import React, { useState } from 'react';


const HomePage = () => {

  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className='overflow-hidden h-[2000px]'>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler}/>
    </div>
  )
}

export default HomePage