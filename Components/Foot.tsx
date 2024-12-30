import React from 'react'

const Foot = () => {
    return (
        <div className='pt-[3rem] pb-[3rem] bg-black'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40'>
                <div>
                    <div className='font-logo text-white text-[18px]'>
                        <span className='text-[30px] md:text-[40px] text-yellow-400'>Big</span>
                        Tech
                    </div>
                    <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, velit! Expedita quae obcaecati culpa sunt. Porro voluptatem dolorum libero eius magni, excepturi, earum rerum dolores rem fugiat voluptates obcaecati voluptas.
                    </h1>
                    <p className='mt-[1.3rem] text-yellow-400 underline font-semibold'>example@gmail.com</p>
                </div>
                <div className='md:mx-auto'>
                    <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>Quick Link</h1>
                    <p className='text-[15px] text-white opacity-80 mb-'>About</p>
                </div>
            </div>
        </div>
    )
}

export default Foot