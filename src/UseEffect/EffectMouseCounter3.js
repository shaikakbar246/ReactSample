import React, { useState } from 'react'
import { useEffect } from 'react'

function EffectMouseCounter3() {
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
    }, [])
    return (
        <div className="text-capitalize text-center mt-5">
            Hooks X-{x} Y-{y}
            <p> 1. Here We will see how to run useeffect only once</p>
             <p>2. We will achive this simply pass the second parameter as empty array.</p>
        </div>
    )
}

export default EffectMouseCounter3