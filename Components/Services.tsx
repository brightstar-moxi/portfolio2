import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
    return (
        <div className='pt-[3rem] pb-[3rem] bg-[#0b0c13]'>
            <div className='text-center'>
                <p className='heading_mini'>Popular Services</p>
                <h1 className='heading_primary'>My Special <span className='text-yellow-400'>Services</span> for You</h1>
            </div>
            <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
                <div data-aos='fade-up' data-aos-anchor-placement='top-center' >
                    <ServicesCard title='React Website' num="01" page=' Lorem ipsum dolor sit amet consectetur adipisicing elit. 1' />
                </div>
                <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay="200">
                    <ServicesCard title='Next JS Website' num="02" page=' Lorem ipsum dolor sit amet consectetur adipisicing elit. 2' />
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay="400">
                    <ServicesCard title='Fullstack Website' num="03" page=' Lorem ipsum dolor sit amet consectetur adipisicing elit. 3' />
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay="600">
                    <ServicesCard title=' Node JS Api' num="04" page=' Lorem ipsum dolor sit amet consectetur adipisicing elit. 4' />
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay="800">
                    <ServicesCard title='MERN Website' num="05" page=' Lorem ipsum dolor sit amet consectetur adipisicing elit. 5' />
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay="1000">
                    <ServicesCard title='Bug Fixing' num="06" page=' Lorem ipsum dolor sit amet consectetur adipisicing elit. 6' />
                </div>

            </div>
        </div>
    )
}

export default Services