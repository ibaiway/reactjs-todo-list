import React from "react";
import ListTodo from "../components/ListTodo";

function Home({ todos, toogleItemTodo, removeTodo }) {
  return (
    <div>
      <ListTodo
        todos={todos}
        toogleItemTodo={toogleItemTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default Home;
