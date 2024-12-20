import React from 'react'
import TypeWriteEffect from './TypeWriteEffect'

const Hero = () => {
    return (
        <div className='w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg'>
            <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
                    <div>
                        <h1 className='text-[#c4cfde] mb-[1.3rem]'>WELCOME TO BRIGHTSTAR WORLD</h1>
                        <div>
                            <h1 className='xl-text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white'>
                                Hi, I'm <span className='text-yellow-300'>Brightstar</span></h1>
                               <TypeWriteEffect/> 
                              
                        </div>
                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, 
                            natus perferendis. Veritatis exercitationem voluptatum molestias in 
                            nam quis aut neque animi ratione, cumque perferendis laudantium porro 
                            magni. Eligendi, harum unde?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero