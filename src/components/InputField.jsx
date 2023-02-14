const InputField = ({text, handleInput, handleSubmit}) => {
    return (
            <label>
                <input value={text} onChange={(e) => handleInput(e.target.value)}/>
                <button onClick={handleSubmit}>Add Task</button>
            </label>
    )
}

export { InputField } ;