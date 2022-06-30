import { useState } from 'react';
import TodoTask from './components/TodoTask';
import TodoForm from './components/TodoForm';
import Butt from './components/increment/Butt';

import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const deleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
//изменение состояния
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ])
  }

  // const updateTask = () => {
  //   return null;
  // }
  console.log(todos)

  return (
    <div className="App">

      <header>
        <h1> my Todo list </h1>
      </header>
      
      <TodoForm addTask={addTask} />

      <div className='item-list'>
        {todos.map((todo) => {
          return (
            <TodoTask
              todo={todo}
              key={todo.id}
              toogleTask={handleToggle}
              removeTask={deleteTask}
            />
          )
        })}
      </div>

      <div>
        <h6>Кол-во задач: {todos.length}</h6>
      </div>

        <Butt />
    </div>
  );
}

export default App;
