import React from 'react'

interface Props{
    plan:string;
    save: string;
    price: string;
    bg:string;
}

const PriceCard = ({plan,bg,save,price}:Props) => {
  return (
    <div>PriceCard</div>
  )
}

export default PriceCard