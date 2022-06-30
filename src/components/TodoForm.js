import { useState } from "react";

const TodoForm = ({ addTask}) => {
  const [userInput, setUserInput] = useState('')

  // изменения события в инпуте 
  const taskChange = (e) => {
    setUserInput(e.currentTarget.value)
    console.log(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  const KeyPress = (e) => {
    if(e.key === "Enter"){
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={taskChange}
        onKeyDown={KeyPress}
        placeholder="Введите значение.."
      />
      <button>Добавить</button>
    </form>
  );
}

export default TodoForm;

