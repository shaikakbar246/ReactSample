import React, { useState } from 'react'
import { useEffect } from 'react'

function EffectCounter2() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - updating Document Title')
        document.title = count
    }, [count])
    return (
        <div className="text-capitalize text-center mt-5">
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click{count} times </button>
            <p> to avoid performance issue in Effecounter 1 exapmple.</p>
            <p> 1. Here We will see conditionally how to run use effect</p>
             <p>2. we have to set conditionally run use effect.
                it means we have to check if counter value change then only update the dom</p>
        </div>
    )
}

export default EffectCounter2