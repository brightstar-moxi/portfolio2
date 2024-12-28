import Image from 'next/image';
import React from 'react'

interface Props {
    image:string;
    user:string;
    role:string;
}

const ClientReviewCard = ({image,role,user}:Props) => {
  return (
    <div className='m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg'>
        <div className='border-2 p-4 border-gray-700 rounded-xl'>
            <Image
            src={`${image}`}
            alt={user}
            width={70}
            height={70}
            className='rounded-full mx-auto mt-[2rem]'
            />
        </div>
    </div>
  )
}

export default ClientReviewCard