import React, { useRef } from "react";
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
}) {
  const textInput = useRef(null);
  const handleChange = (event) => {
    const todoId = event.target.getAttribute("data-id");
    toogleItemTodo(todoId);
  };

  const handleRemove = (event) => {
    const todoId = event.target.getAttribute("data-id");
    removeTodo(todoId);
  };
  const handleEditing = (event) => {
    console.log("PULSADO");
    const todoId = event.target.getAttribute("data-id");
    toogleEdit(todoId);
    textInput.current.focus();
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
        />
        <label htmlFor={id}>{empty}</label>
        {isEditing ? (
          <input
            defaultValue={text}
            ref={textInput}
            data-id={id}
            onBlur={handleEditing}
          />
        ) : (
          <button
            type="button"
            className="todoInfo"
            data-id={id}
            onClick={handleEditing}
          >
            {text}
          </button>
        )}
        <BsXLg className="crossIcon" onClick={handleRemove} data-id={id} />
      </div>
    </>
  );
}

export default ItemTodo;
