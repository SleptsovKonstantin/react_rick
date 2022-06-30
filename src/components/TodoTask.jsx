import { useState } from "react";

const TodoTask = ({ todo, toogleTask, removeTask, updateTask }) => {
  const [editMode, setEditMode] = useState({ on: false });

  return (
    <div key={todo.id} className="item-todo">
      {editMode.on && editMode.id === todo.id ? (
        <input value={todo.task} />
      ) : (
        <>
          <div
            className={todo.complete ? "item_text_comp" : "item_text"}
            onClick={() => toogleTask(todo.id)}
          >
            {todo.task}
            <input type="checkbox"></input>
          </div>
          <div className="item-delete" onClick={() => removeTask(todo.id)}>
            X
          </div>
          <div className="item-update" onClick={() => setEditMode(prev => ({...prev, }))}>
            update
          </div>
        </>
      )}
    </div>
  );
};

export default TodoTask;
