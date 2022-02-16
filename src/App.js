import React, { useState } from "react";
import ListTodo from "./components/ListTodo";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";

import backgroundMain from "./img/image-main.jpg";
import noItems from "./img/todoList.png";

function App() {
  const defaultTodos = [
    { text: "Clean kitchen", done: true, id: 11 },
    { text: "Do the laundry", done: false, id: 22 },
    { text: "Buy bread", done: true, id: 33 },
    { text: "Code all night", done: false, id: 44 },
  ];

  const [todos, setTodos] = useState([...defaultTodos]);

  function saveNewTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function toogleItemTodo(todoId) {
    const updatedTodoItems = todos.map((item) => {
      if (item.id === todoId) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setTodos([...updatedTodoItems]);
    console.log(todos);
  }

  return (
    <>
      <section className="imgBackground">
        <img src={backgroundMain} alt="mountains" />
      </section>
      <section>
        <h1>T O D O</h1>
        <div className="main-add-list">
          <div>
            <NewTodoForm saveNewTodo={saveNewTodo} />
          </div>
        </div>
        <div className="main-item-list">
          <ListTodo todos={todos} toogleItemTodo={toogleItemTodo} />
          <nav className="list-group-item li-nav">
            <a href="http://localhost:3000" className="nav-li-first">
              5 items left
            </a>
            <a href="http://localhost:3000" className="nav-li">
              All
            </a>
            <a href="http://localhost:3000" className="nav-li">
              Active
            </a>
            <a href="http://localhost:3000" className="nav-li">
              Completed
            </a>
            <a href="http://localhost:3000" className="nav-li-last">
              Clear Completed
            </a>
          </nav>
        </div>
        <div>
          <img src={noItems} alt="todo list" className="noItems" />
          <h3 className="noItems-add">Add your first todo</h3>
        </div>
      </section>
      <footer>Drag and drop to reorder list</footer>
      <button
        type="button"
        onClick={() => setTodos([...todos, { text: "prueba", done: false }])}
      >
        Click me
      </button>
    </>
  );
}

export default App;
