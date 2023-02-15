const InputField = ({text, handleInput, AddToDo}) => {
    return (
            <label>
                <input value={text} onChange={(e) => handleInput(e.target.value)}/>
                <button onClick={AddToDo}>Add Task</button>
            </label>
    )
}

export { InputField } ;