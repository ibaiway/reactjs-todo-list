import React from "react";
import ListTodo from "../components/ListTodo";

function Completed({ todos, toogleItemTodo }) {
  const completedTodos = todos.filter((item) => {
    return item.done;
  });
  return (
    <div>
      <ListTodo todos={completedTodos} toogleItemTodo={toogleItemTodo} />
    </div>
  );
}

export default Completed;
