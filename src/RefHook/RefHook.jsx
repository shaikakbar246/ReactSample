import React, { useState } from 'react'
import { useRef } from 'react'
import "./refhook.css"

 const RefHook = () => {
let h1ele =useRef();
let x =useRef(10);
const [y,setY]=useState(100);
return (
    <div className="text-capitalize text-center mt-5">
    <h1 ref={h1ele} className='active'>THis is Heading Tag</h1>
    <button onClick={()=>{console.log(h1ele)
    console.dir(h1ele.current);
    h1ele.current.innerHTML="Changed"
    h1ele.current.classList.toggle('inactive')
    
    }}>Click</button>
    
    <h1>Value of x:{x.current}</h1>
    <button onClick={()=>{
        x.current=x.current+10;//it will not work . if we want to increment we must use useState method because if we use
        //if we use useRef it will not re-render happen
    console.dir(x.current);
    setY(y+100);
    }}>Increment</button>

    
    </div>
  )
}

export default RefHook

