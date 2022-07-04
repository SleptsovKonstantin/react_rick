const TodoTask = ({
  todo,
  toogleTask,
  removeTask,
  cancelTask,
  handleEditMode,
  saveTask,
  editMode,
  setEditMode,
}) => {
  const taskChangeNew = (e) => {
    console.log(editMode);
    setEditMode((prev) => ({ ...prev, currentValue: e.target.value }));
    console.log(editMode.currentValue);
  };

  const handleSubmitNew = (e) => {
    e.preventDefault();
    console.log("editMode click", editMode);
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
            value={editMode.currentValue}
            type="text"
            onChange={taskChangeNew}
            onKeyDown={KeyPress}
          />
          <button onClick={() => saveTask(editMode)}>SAVE</button>
          <button onClick={() => cancelTask(todo.id)}>CANCEL</button>
        </div>
      ) : (
        <div className="oneTask">
          <div
            className={todo.complete ? "item_text_comp" : "item_text"}
          >
            {todo.task}
            <input 
              type="checkbox"  
              onClick={() => toogleTask(todo.id)}>
              </input>
          </div>
          <button className="item-delete" onClick={() => removeTask(todo.id)}>
            DELETE
          </button>
          <button
            className="item-update"
            onClick={() => handleEditMode(todo.id, todo.task)}
          >
            UPDATE
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoTask;
