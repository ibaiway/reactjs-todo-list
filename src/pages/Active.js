import React from "react";
import ListTodo from "../components/ListTodo";

function Active({ todos, toogleItemTodo, removeTodo, toogleEdit, editTodo }) {
  const activeTodos = todos.filter((item) => {
    return !item.done;
  });
  return (
    <div>
      <ListTodo
        todos={activeTodos}
        toogleItemTodo={toogleItemTodo}
        removeTodo={removeTodo}
        toogleEdit={toogleEdit}
        editTodo={editTodo}
      />
    </div>
  );
}

export default Active;
