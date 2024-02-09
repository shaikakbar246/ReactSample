import React, { useState } from 'react'
import EffectMouseCounter4 from './EffectMouseCounter4'

function MouseContainer() {

    const[display,setDisplay]=useState(true)
  return (
    <div className="text-capitalize text-center mt-5">
    <button onClick={()=>setDisplay(!display)}>Toggle display</button>
    {display && <EffectMouseCounter4/>}
    </div>
  )
}

export default MouseContainer