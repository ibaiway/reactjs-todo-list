import React from "react";
import ListTodo from "../components/ListTodo";

function Home({
  todos,
  toogleItemTodo,
  removeTodo,
  toogleEdit,
  editTodo,
  handleOnDragEnd,
}) {
  return (
    <div>
      <ListTodo
        todos={todos}
        toogleItemTodo={toogleItemTodo}
        removeTodo={removeTodo}
        toogleEdit={toogleEdit}
        editTodo={editTodo}
        handleOnDragEnd={handleOnDragEnd}
      />
    </div>
  );
}

export default Home;
