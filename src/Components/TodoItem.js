import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa"

const TodoItem = ({ todoList, setTodoList }) => {
    return (
        <div className="todo-list">
            {todoList.map((todo) => (
                <div className="todo-item">
                    {todo.task}
                    <div className="todo-icon">
                    <FaCheck className="todo-icon" size="1.5rem" />
                    <FaTrash className="todo-icon" size="1.5rem" />
                </div>
                </div>
            )
            )}
        </div>
    );
}

export default TodoItem;