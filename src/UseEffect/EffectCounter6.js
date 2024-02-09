import React, { useEffect } from "react";
import { useState } from "react";
const EffectCounter6=()=>{
    const [count,setCount]=useState(0);
    const[pageWidth,setPageWidth]=(window.innerWidth);
    useEffect(()=>{
    const resizeHandler=()=>{
        setPageWidth(window.innerWidth);
    };
    window.addEventListener("resize",resizeHandler);
    console.log("Hello i am coming from useEffect");
    return()=>{
        console.log("I am removing");
        window.removeEventListener("resize", resizeHandler);
    }
    })
    return(
        <div>
            <h1> Learn Use Effect</h1>
            <h1>{pageWidth}</h1>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Add</button>
        </div>
    )
}
export default EffectCounter7;