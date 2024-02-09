import React, { useState } from 'react'
import { useEffect } from 'react'

function EffectMouseCounter4() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Called')
       window.addEventListener('mousemove',logMousePosition)

       return()=>{
        console.log('useEffect Called')
        window.removeEventListener('mousemove',logMousePosition)
       }
    }, [])
    return (
        <div className="text-capitalize text-center mt-5">
            Hooks X-{x} Y-{y}
            <p> 1. Here We will see how to run clean up code using useEffect</p>
             <p>2. When you want to execute some component clean up code you included in a function and
                and return that function from the function passed to useEffect the clean up code can be cancelling 
                subscription timers or even removing event handlers .</p>
        </div>
    )
}

export default EffectMouseCounter4