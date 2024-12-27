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
        </div>
    </div>
  )
}

export default PriceCard