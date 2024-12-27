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
        <h1 className=''>{price}</h1>
        <p>/Hour</p>
       </div>
        </div>
    </div>
  )
}

export default PriceCard