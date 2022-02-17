import React from "react";

function ItemTodo({ text, done = true, id, toogleItemTodo }) {
  const handleChange = (event) => {
    console.log("The checkbox was checked");
    const todoId = parseInt(event.target.getAttribute("data-id"), 10);
    toogleItemTodo(todoId);
  };

  return (
    <>
      <input
        className=""
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
