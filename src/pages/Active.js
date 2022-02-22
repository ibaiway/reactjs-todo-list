import React from "react";
import ListTodo from "../components/ListTodo";

function Active({
  todos,
  toogleItemTodo,
  removeTodo,
  toogleEdit,
  editTodo,
  handleOnDragEnd,
}) {
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
        handleOnDragEnd={handleOnDragEnd}
      />
    </div>
  );
}

export default Active;
