import { Bars3CenterLeftIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react';

interface Props {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {

    const [navSticky, setNavSticky] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true);
            }
            if (window.scrollY <=90){
                setNavSticky(false);
            }
};
window.addEventListener("scroll", handler)
    }, [])

    return (
        <div className={`fixed w-[100%] z-[1000] bg-gray-800`}>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[12vh]'>
                <div className='font-serif font-extrabold text-white text-[22px]'>
                    <span className='text-[30px] text-yellow-400'>Big</span>
                    Tech
                </div>
                <ul className='md:flex hidden items-center space-x-10'>
                    <li className='nav_link'><a href='#'></a>Home</li>
                    <li className='nav_link'><a href='#'></a>About</li>
                    <li className='nav_link'><a href='#'></a>Service</li>
                    <li className='nav_link'><a href='#'></a>Blog</li>
                    <li className='nav_link'><a href='#'></a>Contact</li>
                </ul>
                <Bars3CenterLeftIcon
                    onClick={openNav}
                    className='w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180' />
            </div>
        </div>
    )
}

export default Nav