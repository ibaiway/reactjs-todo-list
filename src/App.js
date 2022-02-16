import React, { useState } from "react";
import ListTodo from "./components/ListTodo";

import backgroundMain from "./img/image-main.jpg";
import noItems from "./img/todoList.png";

function App() {
  const defaultTodos = [
    { text: "Clean kitchen", done: true },
    { text: "Do the laundry", done: false },
    { text: "Buy bread", done: true },
    { text: "Code all night", done: false },
  ];

  const [todos, setTodos] = useState([...defaultTodos]);
  return (
    <>
      <section className="imgBackground">
        <img src={backgroundMain} alt="mountains" />
      </section>
      <section>
        <h1>T O D O</h1>
        <div className="main-add-list">
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="main-item-list">
          <ListTodo todos={todos} />
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
