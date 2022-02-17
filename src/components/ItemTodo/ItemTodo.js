import React from "react";

function ItemTodo({ text, done = true, id, toogleItemTodo }) {
  const handleChange = (event) => {
    const todoId = event.target.getAttribute("data-id");
    toogleItemTodo(todoId);
  };

  return (
    <>
      <input
        className="checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={handleChange}
        data-id={id}
      />
      <p>{text}</p>
    </>
  );
}

export default ItemTodo;
