import Nav from '@/Components/Nav'
import NavMobile from '@/Components/NavMobile';
import React, { useState } from 'react';


const HomePage = () => {

const [showNav, setShowNav] =  useState(false)

  return (
    <div className='overflow-hhidden'>
      <NavMobile/>
   <Nav/>
    </div>
  )
}

export default HomePage