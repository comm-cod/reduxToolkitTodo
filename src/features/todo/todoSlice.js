import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers:{
    addTodo: (state, action) => {
      const todoz = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todoz)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text: action.payload} : todo)
    }
  }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
