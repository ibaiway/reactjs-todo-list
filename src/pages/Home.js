import React from "react";
import ListTodo from "../components/ListTodo";

function Home({ todos, toogleItemTodo }) {
  return (
    <div>
      <ListTodo todos={todos} toogleItemTodo={toogleItemTodo} />
    </div>
  );
}

export default Home;
