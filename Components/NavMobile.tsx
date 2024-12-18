import React from 'react'

const NavMobile = () => {
    return (
        <div>
        <div className='fixed top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]'>
            </div>
            <ul className='text-white fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-blue-900 space-y-14 z-[10000]'>
                <li className='nav_link  text-[25px] sm:text-[30px]'><a href="#">Home</a></li>
                <li className='nav_link  text-[25px] sm:text-[30px]'><a href="#">About</a></li>
                <li className='nav_link  text-[25px] sm:text-[30px]'><a href="#">Services</a></li>
                <li className='nav_link  text-[25px] sm:text-[30px]'><a href="#">Blog</a></li>
                <li className='nav_link  text-[25px] sm:text-[30px]'><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavMobile