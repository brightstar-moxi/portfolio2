import React from 'react'

const Foot = () => {
  return (
    <div className='pt-[3rem] pb-[3rem] bg-black'>
        <div className='w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4rem] pb-5 border-gray-600 border-opacity-40'>
            <div>
                <div className='font-logo text-white text-[18px]'>
                    <span className='text-[30px] md:text-[40px] text-yellow-400'>Big</span>
                    Tech
                </div>
            </div>
        </div>
    </div>
  )
}

export default Foot