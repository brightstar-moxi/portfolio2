import React from 'react'
import PriceCard from './PriceCard'

const PriceTable = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='text-center'>
                <p className='heading_mini'>Popular Services</p>
                <h1 className='heading_primary'>Best <span className='text-yellow-400'>Pricing</span> For My Project</h1>
            </div>
            <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]'>
                <PriceCard plan="Basic" price="20$" save="25%" bg="bg-red-900" />
                <PriceCard plan="Popular" price="40$" save="35%" bg="bg-green-900" />
                <PriceCard plan="Premium" price="60$" save="45%" bg="bg-blue-900" />
            </div>
        </div>
    )
}

export default PriceTable