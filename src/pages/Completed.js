import React from "react";
import ListTodo from "../components/ListTodo";

function Completed({ todos, toogleItemTodo, removeTodo }) {
  const completedTodos = todos.filter((item) => {
    return item.done;
  });
  return (
    <div>
      <ListTodo
        todos={completedTodos}
        toogleItemTodo={toogleItemTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default Completed;
