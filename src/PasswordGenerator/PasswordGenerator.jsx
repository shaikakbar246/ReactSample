import { Button } from 'bootstrap';
import React, { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState()

    const passwordRef=useRef(null);
    const Password_Generator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "@#$%^&*()_+!~<>?"
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);

    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipBord=useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,5);
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
        Password_Generator()
    },[length,numberAllowed,charAllowed,Password_Generator])


    return (
        <div className='form-control'>
            <div className='form-control'>
                <input type="text" value={password} className='form-control' placeholder='Enter Password' ref={passwordRef} />
                <button className='btn btn-primary' onClick={copyPasswordToClipBord}>Copy</button>
            </div>

            <div className='form-control'>
                <div className='form-control'>
                    <input type="range" min={6} max={50} value={length} className='cursor-pointer'
                        onChange={(e) => { setLength(e.target.value) }} />
                    <label >Length:{length}</label>
                </div>
            </div>

            <div className='form-control'>
                <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
                    onChange={(e) => {
                        setNumberAllowed((prev) => !prev)
                    }}
                />
                <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='form-control'>
                <input type="checkbox" defaultChecked={charAllowed} id="characterInput"
                    onChange={(e) => {
                        setCharAllowed((prev) => !prev)

                    }}
                />
                <label htmlFor='characterInput'>Character</label>
            </div>

        </div>
    )
}

export default PasswordGenerator;