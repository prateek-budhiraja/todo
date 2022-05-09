import React, { useState } from "react";
import {FaPlusSquare} from "react-icons/fa"
import {v4} from "uuid";

const InputForm = ({todoList, setTodoList}) => {
    const [todo, setTodo] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        if(todo === ""){
            return alert("Adding empty todo not possible!!")
        }
        setTodoList([...todoList, {
            task: todo,
            id: v4(),
            completed: false
        }])
        setTodo("");
    }

    return(
        <form onSubmit={handleClick} className="add-todo-form">
            <input onChange={(e)=>setTodo(e.target.value)} value={todo}className="add-todo-box" size="50" placeholder="Enter your task" type="text"></input>
            <FaPlusSquare size="3rem" className="add-icon" onClick={handleClick}/>
        </form>
    )
}

export default InputForm;