import React from "react"

const Todo = ({todo, deleteTodo, completeTodo}) => {
   
    const onDeleteTodo = () => {
        deleteTodo(todo.id)
    }

   
    const onMarkAsComplete = () => {
        completeTodo(todo.id)
    }

    return (
        <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
        <button onClick={onMarkAsComplete} className="complete-btn" ><i className="complete"></i></button>
        <button onClick={onDeleteTodo} className="remove-btn"><i className="remove"></i></button>
        </div>
    )
  }
 

export default Todo