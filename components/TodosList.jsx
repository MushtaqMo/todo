import Todo from './Todo'

const TodosList = ({todos, deleteTodo, completeTodo}) => {
  return (
    <div>
      <ul>
        {todos.map(todo => (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
        ))}
      </ul>
      </div>
  )
}


export default TodosList