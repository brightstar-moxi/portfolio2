import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-[5rem] pb-[5rem] bg-black'>
        <div className='text-center'>
            <p className='heading_mini'>My Blog</p>
            <h1 className='heading_primary'>My Latest <span className='text-yellow-400'>Blog</span> and News</h1>
        </div>
        <div className='w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]'>
            <div><BlogCard/></div>
        </div>
    </div>
  )
}

export default Blog