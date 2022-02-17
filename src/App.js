import React, { useState } from "react";
import ListTodo from "./components/ListTodo";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
import Footer from "./components/Footer";

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
          <Footer />
        </div>
        <div>
          <img src={noItems} alt="todo list" className="noItems" />
        </div>
        <div data-testid="no-todos">
          <h3 className="noItems-add">
            You can create your first todo to get started
          </h3>
        </div>
      </section>
    </>
  );
}

export default App;
