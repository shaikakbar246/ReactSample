import React from 'react'
import { useNavigate } from 'react-router-dom'
export const About = () => {
    const navigate = useNavigate()
    return (
    <div className="text-capitalize text-center mt-5">
    <div>This is About</div>
    <button onClick={() => navigate("order-summary",{replace:true})}>PlaceOrder</button>
    </div>

  )
}
