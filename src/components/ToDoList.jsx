import React from "react";
import { ToDoItem } from "./ToDoItem";

 const ToDoList = ({todos, removeTodo, isDoneHandler, tasksToShow, DONE, ALL_TASKS, IN_PROGRESS, }) => {
    return (
        <ul>
            {
                todos
                    .filter(({isDone}) => {
                    switch (tasksToShow) {
                        case DONE:
                            return isDone;
                        case IN_PROGRESS:
                            return !isDone;
                        case ALL_TASKS:
                        default:
                            return true;
                    }
                    })
                     .map(todo => <ToDoItem key={todo.id}
                     removeTodo={removeTodo}
                     isDoneHandler={isDoneHandler}
                     {...todo}/>)
            }
        </ul>
    )
}

export { ToDoList };