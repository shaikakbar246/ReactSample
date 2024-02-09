import React from 'react'
import { useRef } from 'react'
import "./refhook.css"
function RefExample1() {
    const h1elm = useRef("");
    return (
        <div className="text-capitalize text-center mt-5">
            <h1 ref={h1elm} className='active'>This is RefExample1</h1>
            
            <button onClick={() => {
                console.log(h1elm)
                console.dir(h1elm.current)
                //h1elm.current.innerHTML="Changed"
                h1elm.current.classList.toggle('active')
            }
            }
            >Click</button >
        </div>
    )
}
export default RefExample1
