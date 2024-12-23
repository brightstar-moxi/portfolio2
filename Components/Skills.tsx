import React from 'react'

const Skills = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
        <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center'>
            <div className='col-span-3'>
                <p className='heading_mini'>My Skills</p>
                <h1 className='heading_primary'>Let's Explore Popular <span className='text-yellow-400'>Skills</span> & Experience</h1>
            <p className='text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nihil ut minus, alias magni minima ab beatae iusto? Pariatur 
                facere consequatur sequi quidem eveniet nam porro ipsam ducimus sit amet?
            </p>
            <button className='relative flex h-[50px] w-40 items-center justify-center font-semibold
                              overflow-hidden bg-orange-600 text-white shadow-2xl transition-all before:absolute before:h-0 
                             before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:before:h-56 
                             hover:before:w-56'>
                                <span className='relative z-10'>Learn More</span>
                            </button>
            </div>
        </div>
    </div>
  )
}

export default Skills