import React, { useState } from 'react'
import { useEffect } from 'react'

 const EffectHook = () => {

 const [Increment,UpdateValue]=useState(0);
 const [timer,UpdateTimer]=useState(0);
 const [counter,UpdateCounter]=useState(0);

    useEffect(()=>{
        console.log("Inside UseEffect");
    },[counter])

function bindValue(){
    let value=document.getElementById("txtValue").value;
    UpdateValue(value)
}

  return (
    <div className="text-capitalize text-center mt-5">
    <div>
    <h1>timer: {timer} {console.log("InsideComponent")}
    </h1>
    
    <button className="btn btn-primary"  onClick={()=>UpdateTimer(timer+1)}>Update Timer</button>
    <h1>counter: {counter}</h1>
    <button  className="btn btn-primary" onClick={()=>UpdateCounter(counter+1)}>Update Counter</button>
    </div>
    <h2>AddValue:{Increment}</h2>
    <input type="text"  id="txtValue" value={Increment} onChange={()=>bindValue()}></input>
    </div>
  )
}

export default EffectHook