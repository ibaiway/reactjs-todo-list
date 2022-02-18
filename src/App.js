import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListTodo from "./components/ListTodo";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
import Footer from "./components/Footer";

import backgroundMain from "./img/image-main.jpg";
import noItems from "./img/todoList.png";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import Home from "./pages/Home";

const LOCAL_STORAGE_KEY = "reactjs-todo-list";

function loadLocalStorageData() {
  const prevItems = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!prevItems) {
    return [];
  }

  try {
    return JSON.parse(prevItems);
  } catch (error) {
    return [];
  }
}

function App() {
  /* const defaultTodos = [
    { text: "Clean kitchen", done: true, id: 11 },
    { text: "Do the laundry", done: false, id: 22 },
    { text: "Buy bread", done: true, id: 33 },
    { text: "Code all night", done: false, id: 44 },
  ];
  console.log(defaultTodos); */

  const localStorageTodos = loadLocalStorageData();
  const [todos, setTodos] = useState(localStorageTodos);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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
  }

  return (
    <Router>
      <section className="imgBackground">
        <img src={backgroundMain} alt="mountains" />
      </section>
      <h1>T O D O</h1>
      <section>
        <div className="main-add-list">
          <div>
            <NewTodoForm saveNewTodo={saveNewTodo} />
          </div>
        </div>
      </section>
      <section>
        <ListTodo todos={todos} toogleItemTodo={toogleItemTodo} />
        <div className="main-item-list">
          <Footer todos={todos} />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/active" exact>
              <Active />
            </Route>
            <Route path="/completed" exact>
              <Completed />
            </Route>
          </Switch>
        </div>
      </section>
      <div>
        <img src={noItems} alt="todo list" className="noItems" />
      </div>
      <div data-testid="no-todos">
        <h3 className="noItems-add">
          You can create your first todo to get started
        </h3>
      </div>
    </Router>
  );
}

export default App;
