import React, { useState } from 'react'
import { useRef } from 'react'
import "./refhook.css"
function RefExample2() {
    const h1elm = useRef("");
    const x = useRef(10);
    const [y,setY]=useState(100);
    return (
        <div className="text-capitalize text-center mt-5">
        <p> using useRef value  we can refer dom element. useRef will return object in the object it will have one property it is called "current" 
            using this current property we can change behaviour and value and styles of the refered element
        </p>
            <h1 ref={h1elm} className='active'>This is RefExample1</h1>
            <button onClick={() => {
                console.log(h1elm)
                console.dir(h1elm.current)
                //h1elm.current.innerHTML="Changed"
                h1elm.current.classList.toggle('active')
            }
            }
            >Click</button >

            <p>x value:{x.current}</p>
            <p>The above value updated in react but it is not displayed in the browser when we write only useRef.
                if we want to display updated value in the UI. We use useState. if useState value is updated 
                component will be re-renderd. but if useRef value is changed then component will not re-renderd.
                .if we want to display changed value in useRef we must declared one useState value also.
            </p>
            <button onClick={()=>{
                x.current = x.current + 10;
                console.log(x.current);

                setY(y+10)

            }}>

                Increment</button>
        </div>
    )
}
export default RefExample2
