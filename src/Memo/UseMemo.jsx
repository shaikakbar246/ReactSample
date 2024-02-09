import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [counter, setCounter] = useState(0);
    let num1 = 10;
    let num2 = 20;

    let sum = useMemo(
        () => {
            return num1 + num2;
        }, [num1, num2]
    )
    return (
        <div className="text-capitalize text-center mt-5">

            <p>it is used for memorising the result. means once result is generated then again if the function is callled
                with the same input same result will be shown instead of doing all operation . like casche
            </p>

            <button onClick={() => {
                setCounter(counter + 1)
            }}>UpdateCounter</button>

            <h1>Counter:{counter}</h1>
            <h1>Sum Of Two Numbers:{sum}</h1>
        </div>
    )
}

export default UseMemo