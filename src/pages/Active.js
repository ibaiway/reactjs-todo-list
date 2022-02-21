import React from "react";
import ListTodo from "../components/ListTodo";

function Active({ todos, toogleItemTodo, removeTodo }) {
  const activeTodos = todos.filter((item) => {
    return !item.done;
  });
  return (
    <div>
      <ListTodo
        todos={activeTodos}
        toogleItemTodo={toogleItemTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default Active;
