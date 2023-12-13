/* eslint-disable no-unused-vars */
import {createContext,useContext} from "react"
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todomsg:"Todo msg",
            completed:false,
        }
    ],
    addtodo :(todomsg)=>{},
    updateTodo:(id,todomsg)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext) 
}

export const TodoProvider = TodoContext.Provider;