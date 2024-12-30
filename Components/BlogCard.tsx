import { CalendarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'

interface Props{
    image:string;
    title:string;
    comment:string;
    date:string;
}

const BlogCard = ({image, title, comment, date}:Props) => {
  return (
    <div className='bg-gray-900'>
        <div>
            <Image
            src={`${image}`}
            alt='blog'
            width={300}
            height={300}
            className='object-cover w-[100%] h-[100%]'
            />
          
        </div>
        <div className='p-4'>
            <div className='mt-[1rem] mb-[1rem] px-3 py-1 bg-gray-800 w-fit flex items-center space-x-2 rounded-lg'>
                <CalendarIcon/>
            </div>
        </div>
    </div>
  )
}

export default BlogCard