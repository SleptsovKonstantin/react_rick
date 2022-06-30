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
  KeyPress,
}) => {
  const taskChangeNew = (e) => {
    setEditMode(e.currentTarget.value);
    editMode.currentValue = e.currentTarget.value;
    console.log(editMode);
  };

  const handleSubmitNew = (e) => {
    e.preventDefault();
    // addTask(userInput);
    setEditMode("");
  };

  return (
    <div key={todo.id} className="item-todo">
      {editMode.on && editMode.id === todo.id ? (
        <>
          <input
            value={(editMode.oldValue = todo.task)}
            type="text"
            onChange={taskChangeNew}
            // onKeyDown={KeyPress}
          />
          <div onClick={() => saveTask(todo.id)}>save</div>
          <div onClick={() => cancelTask(todo.id)}>X</div>
        </>
      ) : (
        <>
          <div
            onSubmit={handleSubmitNew}
            className={todo.complete ? "item_text_comp" : "item_text"}
            onClick={() => toogleTask(todo.id)}
          >
            {todo.task}
            <input type="checkbox"></input>
          </div>
          <div className="item-delete" onClick={() => removeTask(todo.id)}>
            X
          </div>
          <div className="item-update" onClick={() => handleEditMode(todo.id)}>
            update
          </div>
        </>
      )}
    </div>
  );
};

export default TodoTask;
