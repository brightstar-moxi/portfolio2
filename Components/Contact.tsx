import React from 'react'

const Contact = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto'>
            <div>
                <p className='heading_mini'>Get in Touch</p>
                <h1 className='heading_primary'>Let's make your <span className='text-yellow-400'>Brand</span> brilliant</h1>
            <p className='text-[15px] text-white mt-[1rem] opacity-75'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque eius, tenetur excepturi accusamus est, nulla 
                maxime earum ad iure error fugiat expedita sit? Minus porro veniam numquam fuga doloribus.
                </p>
                <h1 className=''>+1 234 56 7890</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact