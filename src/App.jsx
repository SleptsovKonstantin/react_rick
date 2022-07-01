import { useState } from "react";
import TodoTask from "./components/TodoTask";
import TodoForm from "./components/TodoForm";
import Butt from "./components/increment/Butt";

import "./App.scss";

function App() {
  const [editMode, setEditMode] = useState({
    on: false,
    id: undefined,
    oldValue: "",
    currentValue: "",
  });

  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleEditMode = (id, task) => {
    setEditMode((prev) => ({ ...prev, id, on: true, oldValue: task }));
  };

  const cancelTask = (id) => {
    setEditMode((prev) => ({ ...prev, id, on: false }));
  };

  const saveTask = (editMode) => {
    console.log("editMode.curent", editMode.currentValue);
    setTodos(
      todos.map((todo) =>
        todo.id === editMode.id
          ? { ...todo, task: editMode.currentValue }
          : todo
      )
    );
    // cancelTask(editMode.id);
  };

  console.log("todos", todos);

  return (
    <div className="App">
      <header>
        <h1> my Todo list </h1>
      </header>

      <TodoForm addTask={addTask} />

      <div className="item-list">
        {todos.map((todo) => {
          return (
            <TodoTask
              setEditMode={setEditMode}
              editMode={editMode}
              handleEditMode={handleEditMode}
              saveTask={saveTask}
              cancelTask={cancelTask}
              todo={todo}
              key={todo.id}
              toogleTask={handleToggle}
              removeTask={deleteTask}
            />
          );
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
