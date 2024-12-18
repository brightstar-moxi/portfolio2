import { Bars3CenterLeftIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
    openNav :()=>void
}

const Nav = ({openNav}:Props) => {
  return (
    <div className='fixed w-[100%] z-[1000] bg-gray-800'>
     <div className='flex items-center justify-between w-[80%] mx-auto h-[12vh]'>
       <div className='font-mono text-white text-[18px]'>
        <span className='text-[30px] md:text-yellow-400'>MR</span>
        Coder
       </div>
       <ul className='md:flex hidden items-center space-x-10'>
        <li className='nav_link'><a  href='#'></a>Home</li>
        <li className='nav_link'><a  href='#'></a>About</li>
        <li className='nav_link'><a  href='#'></a>Service</li>
        <li className='nav_link'><a  href='#'></a>Blog</li>
        <li className='nav_link'><a  href='#'></a>Contact</li>
       </ul>
       <Bars3CenterLeftIcon 
       onClick={openNav}
        className='w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180'/>
              </div>
        </div>
  )
}

export default Nav