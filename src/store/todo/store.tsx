import { createSlice } from "@reduxjs/toolkit";
import { AddTodoType } from "../../typings/Actions";
import { InitialStateProps, } from "../../typings/Todo";

const initialState: InitialStateProps = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state: InitialStateProps, action: AddTodoType): any => {
            var index = state.todos.map(e => e.id).indexOf(action.payload.id)
            if (!(index >= 0)) {
                var todo = {
                    ...action.payload,
                    status: 1,
                    id: state.todos.length + 1,
                }
                state.todos.unshift(todo)
            }
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        remove: (state: InitialStateProps, action: AddTodoType): any => {
            var index = state.todos.map(e => e.id).indexOf(action.payload.id)
            return index >= 0 ? state.todos.splice(index, 0) : null
        }
    }
})

export const { add } = todoSlice.actions
export default todoSlice.reducer