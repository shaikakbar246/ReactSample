import React, { useState } from 'react'
import Search from './Search'

 const ChildToParent = () => {
const[Todos,UpdateToDos]=useState(
    [
        'Task1',
        'Task2'
    ]
)

const addNew=(task)=>{
    UpdateToDos([...Todos,task])
}

  return (
    <div className="text-capitalize text-center mt-5">
    <Search add={addNew}></Search>
    <ul>
        {
            Todos.map(
                (t)=><li>{t}</li>
            )
        }

    </ul>
    </div>
  )
}

export default ChildToParent
