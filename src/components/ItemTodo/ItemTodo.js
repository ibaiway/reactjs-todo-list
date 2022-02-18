import React from "react";

function ItemTodo({ text, done = true, id, toogleItemTodo, empty = "" }) {
  const handleChange = (event) => {
    const todoId = event.target.getAttribute("data-id");
    toogleItemTodo(todoId);
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
      </div>
    </>
  );
}

export default ItemTodo;
