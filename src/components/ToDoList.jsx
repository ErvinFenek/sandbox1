import React from "react";
import { ToDoItem } from "./ToDoItem";

 const ToDoList = ({todos, removeTodo, isDoneHandler}) => {
    return (
        <ul>
            {
                todos.map(todo => <ToDoItem key={todo.id}
                 removeTodo={removeTodo}
                 isDoneHandler={isDoneHandler} {...todo}/>)
            }
                
        </ul>
    )
}

export { ToDoList };