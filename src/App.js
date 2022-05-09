import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import './App.css';
import InputForm from "./Components/InputForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h1 id="title">To Do</h1>
        <InputForm todoList={todoList} setTodoList={setTodoList}/>
        <TodoItem todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
