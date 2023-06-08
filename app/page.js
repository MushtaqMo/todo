"use client"
import Form from "@/components/Form";
import TodosList from "@/components/TodosList";
import "./main.css";

import { useState } from "react"

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (newText) => {
    setTodos([
      ...todos, 
      { 
        text: newText, 
        completed: false, 
        id: Math.random() * 1000 
      }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completeTodo = (id) => {
    setTodos(todos.map((todo) => {
     
      if (todo.id === id) {
       
        return {
          ...todo, completed: !todo.completed
        };
      }
   
           return todo
    })
    )
  }

  return (
    <div className="App">
      <h1 id="mainHeader">To do list</h1>
      <Form addTodo={addTodo} />
      <TodosList todos={todos}  deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
  )
}


export default App;