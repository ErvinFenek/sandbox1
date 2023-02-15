import { createSlice } from "@reduxjs/toolkit";
import {v4} from "uuid";

const ToDoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    todos: {
        AddToDo (state, action) {
            console.log(state);
            console.log(action);
            state.todos.push({
                id: v4(),
                text: action.payload,
                isDone: false,
            })
        },
        removeTodo (state, action) {},
        isDoneHandler (state, action) {},
        onSelectChangeHandler (state, action) {},
    }
})

export const {addToDo, removeTodo, isDoneHandler, onSelectChangeHandler} = ToDoSlice.actions;

export default ToDoSlice.reducer;