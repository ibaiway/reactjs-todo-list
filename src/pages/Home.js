import React from "react";
import ListTodo from "../components/ListTodo";

function Home({ todos, toogleItemTodo, removeTodo, toogleEdit, editTodo }) {
  return (
    <div>
      <ListTodo
        todos={todos}
        toogleItemTodo={toogleItemTodo}
        removeTodo={removeTodo}
        toogleEdit={toogleEdit}
        editTodo={editTodo}
      />
    </div>
  );
}

export default Home;
