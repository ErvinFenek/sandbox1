import { useState } from "react";
import { v4 } from "uuid"
import { ToDoList } from "./components/ToDoList";
import { InputField } from "./components/InputField";
import { Select } from "./components/Select";

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [tasksToShow, setTasksToShow] = useState("ALL_TASKS");
  const ALL_TASKS = "0";
  const DONE = "1";
  const IN_PROGRESS = "2";
  const SELECT_OPTIONS = [
        {
            text: "All tasks",
            value: ALL_TASKS,
        },
        {
            text: "Done",
            value: DONE,
        },
        {
            text: "In progress",
            value: IN_PROGRESS,
        }
  ];

   const onSelectChangeHandler = (e) => {
        setTasksToShow(e.target.value);
        console.log(tasksToShow);
   };

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

        <Select
            tasksToShow={tasksToShow}
            setTasksToShow={setTasksToShow}
            onSelectChangeHandler={onSelectChangeHandler}
            SELECT_OPTIONS={SELECT_OPTIONS}
            DONE={DONE}
            ALL_TASKS={ALL_TASKS}
            IN_PROGRESS={IN_PROGRESS}
        />
      <ToDoList todos={todos}
                isDoneHandler={isDoneHandler}
                removeTodo={removeTodo}
                handleSubmit={handleSubmit}
                tasksToShow={tasksToShow}

      />
    </div>
  );
}

export default App;
