import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa"




const TodoItem = ({ todoList, setTodoList }) => {

    const completeTaskHandler = (todo) => {
        setTodoList(
            todoList.map((element) => {
                if(element.id === todo.id){
                    return {...element, completed: !element.completed}
                }
                return element
            })
        )
    }

    const deleteTaskHandler = (todo) => {
        setTodoList(todoList.filter(
            (element) => element.id !== todo.id
        ))
    }

    return (
        <div className="todo-list">
            {todoList.map((todo) => (
                <div className="todo-item">
                    <div style={{display: "inline"}}className={todo.completed ? "checked" : ""}>
                    {todo.task}
                    </div>
                    <div className="todo-icon">
                    <FaCheck onClick={() => completeTaskHandler(todo)} className="todo-icon" size="1.5rem" />
                    <FaTrash onClick={() => deleteTaskHandler(todo)} className="todo-icon" size="1.5rem" />
                </div>
                </div>
            )
            )}
        </div>
    );
}

export default TodoItem;