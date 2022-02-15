import React from "react";

function ItemTodo({ text, done = true }) {
  return (
    <>
      <input type="checkbox" defaultChecked={done} />
      <p>{text}</p>
    </>
  );
}

export default ItemTodo;
