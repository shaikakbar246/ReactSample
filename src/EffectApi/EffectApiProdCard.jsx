import React from 'react'
import "./effectapi.css"
 const EffectApiProdCard = ({title,price,image,rating}) => {
   
  return (
    <div className='card text-capitalize text-center mt-5'>
    <img src={image}/>
      <p>{title}</p>
      <p>{price}</p>
      <p>{rating.rate}</p>
    </div>
  )
}

export default EffectApiProdCard
