const ToDoItem = ({id, text, isDone, removeTodo, isDoneHandler}) => {
    return (
        <li>
            <input
                className="isDoneCheckbox"
                type="checkbox"
                checked={isDone} onChange={() => isDoneHandler(id)}/>
            <span >{text}</span>
            <span
                className="delete"
                onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}

export { ToDoItem };