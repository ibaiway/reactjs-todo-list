import React from "react";
import { BsXLg } from "react-icons/bs";

function ItemTodo({
  text,
  done = true,
  id,
  toogleItemTodo,
  empty = "",
  removeTodo,
}) {
  const handleChange = (event) => {
    const todoId = event.target.getAttribute("data-id");
    toogleItemTodo(todoId);
  };

  const handleRemove = (event) => {
    const todoId = event.target.getAttribute("data-id");
    removeTodo(todoId);
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
        <p className="todoInfo">{text}</p>
        <BsXLg className="crossIcon" onClick={handleRemove} data-id={id} />
      </div>
    </>
  );
}

export default ItemTodo;
