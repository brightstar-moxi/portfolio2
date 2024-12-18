import React from 'react';

const Nav = () => {
  return (
    <div className='fixed w-[100%] z-[1000] bg-gray-800'>
     <div className='flex items-center justify-between w-[80%] mx-auto h-[12vh]'>
       <div className='font-mono text-white text-[18px]'>
        <span className='text-[30px] md:text-yellow-400'>MR</span>
        Coder
       </div>
       <ul className='md:flex hidden items-center space-x-10'>
        <li><a className='nav_link' href='#'></a>Home</li>
        <li><a className='nav_link' href='#'></a>About</li>
        <li><a className='nav_link' href='#'></a>Service</li>
        <li><a className='nav_link' href='#'></a>Blog</li>
        <li><a className='nav_link' href='#'></a>Contact</li>
       </ul>
              </div>
        </div>
  )
}

export default Nav