import {useSelector} from "react-redux";
import { ToDoItem } from "./ToDoItem";


 const ToDoList = ({tasksToShow,  DONE, ALL_TASKS, IN_PROGRESS}) => {
    const todos = useSelector(state => state.todos.todos);

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

                     {...todo}/>)
            }
        </ul>
    )
}

export { ToDoList };