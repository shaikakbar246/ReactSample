import React from 'react'
import { useNavigate } from 'react-router-dom'
 const Order = () => {
    const navigate=useNavigate();
  return (
    <div className="text-capitalize text-center mt-5">
    <div>Ordered Placed!</div>
    <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default Order
