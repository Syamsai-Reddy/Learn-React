import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState ={
    todos: [{id:1,text:"Hello world"}]
}

export const todoSlice =createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            if(todo.text.length>0){
                state.todos.push(todo)
            }
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTode:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id==action.payload ?todo.ti.text=todo.text:todo)
        }
    }
})
export const {addTodo,removeTodo,updateTode}= todoSlice.actions
export default todoSlice.reducer