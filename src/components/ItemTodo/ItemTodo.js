import React from "react";
import { BsXLg } from "react-icons/bs";

function ItemTodo({
  text,
  done = true,
  id,
  toogleItemTodo,
  empty = "",
  removeTodo,
  toogleEdit,
  isEditing,
  editTodo,
}) {
  const handleChange = (event) => {
    const todoId = event.target.getAttribute("data-id");
    toogleItemTodo(todoId);
  };

  const handleRemove = (event) => {
    const todoId = event.target.getAttribute("data-id");
    removeTodo(todoId);
  };
  const handleEditing = (event) => {
    const todoId = event.target.getAttribute("data-id");
    toogleEdit(todoId);
  };
  const handleSaveEdit = (event) => {
    const todoId = event.target.getAttribute("data-id");
    const editedText = event.target.value;
    editTodo(todoId, editedText);
  };

  return (
    <>
      <div className="round">
        <input
          className="checkbox"
          type="checkbox"
          defaultChecked={done}
          onChange={handleChange}
          id={id}
          data-id={id}
          data-testid="todo-item-checkbox"
        />
        <label htmlFor={id}>{empty}</label>
        {isEditing ? (
          <input
            defaultValue={text}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            data-id={id}
            onBlur={handleSaveEdit}
            data-testid="todo-item-input"
            className="todoInput"
          />
        ) : (
          <button
            type="button"
            className={done ? "todoInfo todoFinishLine" : "todoInfo"}
            data-id={id}
            onClick={handleEditing}
          >
            {text}
          </button>
        )}
        <BsXLg
          className="crossIcon"
          onClick={handleRemove}
          data-id={id}
          data-testid="todo-item-delete-button"
        />
      </div>
    </>
  );
}

export default ItemTodo;
