import React from 'react'

const NavMobile = () => {
    return (
        <div className='fixed top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]'>
            <ul className='text-white fixed flex items-center flex-col h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10000]'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavMobile