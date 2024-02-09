import React, { useState } from 'react'
import "./todobind.css"
const TodoBind = () => {
    let [todoinput, updateInput] = useState("test")
    //object destructuring
    let [todolist, UpdateTodo] = useState([{
        id: 1,
        task: "LearnReact1"
    },
    {
        id: 2,
        task: "LearnReact2"
    },
    {
        id: 3,
        task: "LearnReact3"
    }
    ])

 let i=4;
    function addNewToDo() {
       if(todoinput ==""){
        alert("Add Some Text");
       }
       else
       {
       let newTodos=[
            ...todolist,
            {
                id:i++,
                task:todoinput
            }
        ]
        UpdateTodo(newTodos)
        updateInput("")
       }
    }

    function deleteToDo(id){
        let updatedtodos= todolist.filter(
            (todo)=>{
                return todo.id !=id
            }
        )
        UpdateTodo(updatedtodos)
    }



    return (
        <div className="container mt-5 w-50 text-center">
            <div className="input-group">
                <input className='form-control'
                    onChange={(e) => {
                        let task = e.target.value;
                        updateInput(task)
                    }} type='text' value={todoinput}></input>
                <button className='btn btn-primary' type="button" onClick={()=>{addNewToDo()}}>Add</button>
            </div>
            <ul className='list-group mt-4'>
                {
                    todolist.map(
                        (todo) => {
                            return (
                                <li className='list-group-item'>
                                    <p>{todo.task}</p>
                                    <button key={todo.i} className='btn btn-primary' onClick={()=>{deleteToDo(todo.id)}}>X</button>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default TodoBind
