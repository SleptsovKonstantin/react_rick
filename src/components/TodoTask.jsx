import { useState } from "react";

const TodoTask = ({
  editMode,
  handleEditMode,
  todo,
  toogleTask,
  removeTask,
  saveTask,
  cancelTask,
  setEditMode,
}) => {
  const taskChangeNew = (e) => {
    setEditMode((prev) => ({ ...prev, currentValue: e.target.value }));
  };

  const handleSubmitNew = (e) => {
    console.log("editmode comp", editMode);
    e.preventDefault();
    saveTask(editMode);
  };

  const KeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmitNew(e);
    }
  };

  return (
    <div key={todo.id} className="item-todo">
      {editMode.on && editMode.id === todo.id ? (
        <div>
          <input
            value={editMode.currentValue = todo.task}
            type="text"
            onChange={taskChangeNew}
            onKeyDown={KeyPress}
          />
          <div onClick={() => saveTask(todo)}>save</div>
          <div onClick={() => cancelTask(todo.id)}>X</div>
        </div>
      ) : (
        <div>
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
          <div
            className="item-update"
            onClick={() => handleEditMode(todo.id, todo.task)}
          >
            update
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoTask;
