import React from "react";
import ItemTodo from "../ItemTodo";

function ListTodo({ todos }) {
  return (
    <ul data-testid="todos-list">
      {todos.map(({ id, text, done }) => (
        <li key={id} data-testid="todo-item">
          <ItemTodo text={text} done={done} />
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
