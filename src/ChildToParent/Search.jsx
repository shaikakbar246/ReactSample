import React from 'react'
import { useState } from 'react'
 const Search = (props) => {
    const[txtInput,setNewInput]=useState("")
  return (
    <div className="text-capitalize text-center mt-5">
    <input value={txtInput} onChange={(e)=>setNewInput(e.target.value)}></input>
    <button onClick={()=>{props.add(txtInput)}}>AddTodo</button>
    </div>
  )
}

export default Search
