import React from "react";
import ListTodo from "../components/ListTodo";

function Active({ todos, toogleItemTodo }) {
  const activeTodos = todos.filter((item) => {
    return !item.done;
  });
  return (
    <div>
      <ListTodo todos={activeTodos} toogleItemTodo={toogleItemTodo} />
    </div>
  );
}

export default Active;
