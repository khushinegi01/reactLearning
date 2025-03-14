import {createSlice, nanoid } from '@reduxjs/toolkit';
//createSlice is a function that generates action creators and action types for a slice of the state
// nanoid is a function that generates a unique Id for the todo item 

const initialState = {
    todos:[{
        id:1,
        text:'message'
    }]
}

const todoSLice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo:(state ,action )=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
             state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo : (state,action) =>{
            const id = action.payload.id
            const todo = state.todos.find(todo => todo.id === id)
            if(todo){
                todo.text = action.payload.text;
            }
        }
    }
})

// exporting the functionality individually
export const {addTodo ,removeTodo ,updateTode} = todoSLice.actions 

// exporting to use in the store 
export default todoSLice.reducer
