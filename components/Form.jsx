import {useState} from "react"

const Form = ({addTodo}) => {
  const [inputText, setInputText] = useState("")

  const onChangeInputText = (e) => {
    setInputText(e.target.value)
  }

 
  const createNewTodo = (e) => {
    e.preventDefault()

    if(!inputText) {
      return;
    }

    addTodo(inputText)
    setInputText("")
  }

  return (
    <form>
      <input type="text" className="todo-input" value={inputText} onChange={onChangeInputText} />
      <button className="todo-button" type="submit" onClick={createNewTodo}>
        Add
        </button>
    </form>
  )
}

export default Form