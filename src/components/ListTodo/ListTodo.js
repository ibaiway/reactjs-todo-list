import React from "react";
import ItemTodo from "../ItemTodo";

function ListTodo({ todos, toogleItemTodo, removeTodo }) {
  return (
    <ul data-testid="todos-list">
      {todos.map(({ id, text, done }) => (
        <li key={id} data-testid="todo-item" className="list-group-item li">
          <ItemTodo
            text={text}
            done={done}
            id={id}
            toogleItemTodo={toogleItemTodo}
            removeTodo={removeTodo}
          />
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
