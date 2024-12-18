import React from 'react';

const Nav = () => {
  return (
    <div className='fixed w-[100%] z-[1000] bg-gray-800'>
     <div className='flex items-center justify-between w-[80%] mx-auto h-[12vh]'>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
            BRIGHTSTAR
            <span className='text-yellow-300'>TECH</span>
        </h1>
        <div className='nav-link'>HOME</div>
        <div className='nav-link'>SERVICES</div>
        <div className='nav-link'>ABOUT</div>
        <div className='nav-link'>PROJECT</div>
        <div className='nav-link'>BLOG</div>
        <div className='nav-link'>CONTACT</div>
        </div>
        </div>
  )
}

export default Nav