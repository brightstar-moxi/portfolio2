import React from 'react'
import ReviewSlider from './ReviewSlider'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Review = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
        <div className='text-center'>
            <div className='heading_mini'>Client Reviews</div>
            <h1 className='heading_primary'>I've <span className='text-yellow-400'>40+</span> Clients Feedback</h1>
        </div>
        <div className='w-[80%] pt-[3rem] md:pt-[5rem] mx-auto'>
            <ReviewSlider/>
        </div>
    </div>
  )
}

export default Review