import { useState } from "react";
import { v4 } from "uuid"
import { ToDoList } from "./components/ToDoList";
import { InputField } from "./components/InputField";

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: v4(),
          text: text,
          isDone: false,
        }
      ])
        setText("");
    }

  }
  const isDoneHandler = (todoId) => {
      setTodos(
          todos.map(
              todo => {
                  if (todo.id !== todoId) return todo;
                  return {
                      ...todo,
                      isDone: !todo.isDone,
                  }
              }
          )
      )
  }
  const removeTodo = (todoId) => {
      setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
        <InputField text={text} handleInput={setText} handleSubmit={handleSubmit}/>


      <ToDoList todos={todos}
                isDoneHandler={isDoneHandler}
                removeTodo={removeTodo}
                handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
