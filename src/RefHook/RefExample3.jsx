import React from 'react'
import { useRef } from 'react'
import './refmultielehook.css'

export const RefExample3 = () => {
    let h1mulElement = useRef([]);
    function changeHeadStyle(e) {
        for (let ele of h1mulElement.current){
            ele.classList.remove('primary')
        }
        e.target.classList.add('primary')
    }
    return (
        <div className="text-capitalize text-center mt-5"> 
            <h1 ref={(el)=>h1mulElement.current[0]=el} onClick={(eve) => {
                console.log(h1mulElement);
                console.log(h1mulElement.current);
                console.log(h1mulElement.innerHTML);
                console.log(h1mulElement.current.innerHTML);
                changeHeadStyle(eve)

            }}>This is Heading 1</h1>

            <h1 ref={(el)=>h1mulElement.current[1]=el} onClick={(eve) => {
                changeHeadStyle(eve)

            }}>This is Heading 2</h1>


            <h1 ref={(el)=>h1mulElement.current[2]=el} onClick={(eve) => {
                changeHeadStyle(eve)

            }}>This is Heading 3</h1>

            <h1 ref={(el)=>h1mulElement.current[3]=el} onClick={(eve) => {
                changeHeadStyle(eve)

            }}>This is Heading 4</h1>
        </div>
    )


}

export default RefExample3
