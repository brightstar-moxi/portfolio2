import { CheckIcon } from '@heroicons/react/20/solid';
import React from 'react'

interface Props{
    plan:string;
    save: string;
    price: string;
    bg:string;
}

const PriceCard = ({plan,bg,save,price}:Props) => {
  return (
    <div className='text-center rounded-lg bg-gray-900'>
        <div className={`p-6 rounded-t-lg ${bg}`}>
            <h1 className='text-white text-[30px]'>{plan}</h1>
       <p className='text-[16px] text-[#d7d7d7]'>
        Try out {plan} Plan Save{" "}
        <span className='text-yellow-400'>{save}</span>
       </p>
       <div className='flex justify-center items-end mt-[1rem] space-x-1'>
        <h1 className='text-[40px] font-bold text-yellow-500'>{price}</h1>
        <p className='text-white'>/Hour</p>
       </div>
        </div>
        <div className='p-6'>
            <div className='flex items-center space-x-3'>
                <CheckIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
                <p className='text-[17px] text-white opacity-80'>Next JS WebApp</p>
            </div>
            <div className='flex items-center mt-[1rem] mb-[1rem] space-x-3'>
                <CheckIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
                <p className='text-[17px] text-white opacity-80'>React JS WebApp</p>
            </div>
            <div className='flex items-center space-x-3'>
                <CheckIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
                <p className='text-[17px] text-white opacity-80'>Fullstack JS WebApp</p>
            </div>
            <div className='flex items-center space-x-3 mt-[1rem] mb-[1rem]'>
                <CheckIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
                <p className='text-[17px] text-white opacity-80'>Authentication </p>
            </div> 
            <div className='flex items-center space-x-3'>
                <CheckIcon className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
                <p className='text-[17px] text-white opacity-80'>Next JS Website</p>
            </div>
        </div>
    </div>
  )
}

export default PriceCard