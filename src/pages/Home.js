import React from "react";
import ListTodo from "../components/ListTodo";

function Home({ todos, toogleItemTodo, removeTodo, toogleEdit }) {
  return (
    <div>
      <ListTodo
        todos={todos}
        toogleItemTodo={toogleItemTodo}
        removeTodo={removeTodo}
        toogleEdit={toogleEdit}
      />
    </div>
  );
}

export default Home;
