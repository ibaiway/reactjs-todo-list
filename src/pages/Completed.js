import React from "react";
import ListTodo from "../components/ListTodo";

function Completed({
  todos,
  toogleItemTodo,
  removeTodo,
  toogleEdit,
  editTodo,
}) {
  const completedTodos = todos.filter((item) => {
    return item.done;
  });
  return (
    <div>
      <ListTodo
        todos={completedTodos}
        toogleItemTodo={toogleItemTodo}
        removeTodo={removeTodo}
        toogleEdit={toogleEdit}
        editTodo={editTodo}
      />
    </div>
  );
}

export default Completed;
