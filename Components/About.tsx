import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'

const About = () => {
  return (
    <div className='mt-[-3rem] bg-black pb-[3rem]'>
        <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] 
        mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
            <div>
                <p className='heading_mini '>About Me</p>
                <h1 className='heading_primary'>Professional <span className='text-yellow-400'>Website</span>  for  your business</h1>
           <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dicta reprehenderit unde praesentium perferendis commodi? Maiores necessitatibus accusantium molestias ea atque. Amet debitis similique ex cupiditate, magnam quisquam tempore delectus!
           </p>
           <div className='mt-[2rem] space-y-3'>
            <div className='flex items-end space-x-4'>
        <CheckIcon/>
        <p>Frontend Development</p>
            </div>
           </div>
            </div>
        </div>
    </div>
  )
}

export default About