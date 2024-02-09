import React from 'react'
import { useRef } from 'react'
import './refmultielehook.css'

export const RefMultiEleHook = () => {
    let arr = new Array(10).fill(null);
    let h1mulElement = useRef([]);
    function changeHeadStyle(e) {
        for (let ele of h1mulElement.current) {
            ele.classList.remove("primary");
        }
        e.target.classList.add("primary")
    }

    return (
        <div className="text-capitalize text-center mt-5">

            {
                arr.map(
                    (ele, i) => {
                        return (
                            <h1 ref={(el) => h1mulElement.current[i] = el} onClick={(eve) => {
                                changeHeadStyle(eve)
                            }}>This is Heading {i+1} </h1>
                        )

                    }

                )
            }
        </div>
    )
}

export default RefMultiEleHook
