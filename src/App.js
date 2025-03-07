import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
import Footer from "./components/Footer";
import EmptyTodos from "./components/EmptyTodos/EmptyTodos";

import backgroundMain from "./img/image-main.jpg";
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

  function removeCompletedTodos() {
    const filteredTodos = todos.filter((item) => {
      return !item.done;
    });

    setTodos([...filteredTodos]);
  }

  function removeTodo(todoId) {
    const filteredTodos = todos.filter((item) => {
      return item.id !== todoId;
    });

    setTodos([...filteredTodos]);
  }

  function toogleEdit(todoId) {
    const editedTodoItems = todos.map((item) => {
      if (item.id === todoId) {
        return {
          ...item,
          isEditing: !item.isEditing,
        };
      }

      return item;
    });

    setTodos([...editedTodoItems]);
  }

  function editTodo(todoId, text) {
    const editedTodoItems = todos.map((item) => {
      if (item.id === todoId) {
        console.log(item.isEditing);
        return {
          ...item,
          text: text,
          isEditing: false,
        };
      }

      return item;
    });

    setTodos([...editedTodoItems]);
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
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
        <div className="main-item-list">
          <Switch>
            <Route path="/" exact>
              <Home
                todos={todos}
                toogleItemTodo={toogleItemTodo}
                removeTodo={removeTodo}
                toogleEdit={toogleEdit}
                editTodo={editTodo}
                handleOnDragEnd={handleOnDragEnd}
              />
            </Route>
            <Route path="/active" exact>
              <Active
                todos={todos}
                toogleItemTodo={toogleItemTodo}
                removeTodo={removeTodo}
                toogleEdit={toogleEdit}
                editTodo={editTodo}
                handleOnDragEnd={handleOnDragEnd}
              />
            </Route>
            <Route path="/completed" exact>
              <Completed
                todos={todos}
                toogleItemTodo={toogleItemTodo}
                removeTodo={removeTodo}
                toogleEdit={toogleEdit}
                editTodo={editTodo}
                handleOnDragEnd={handleOnDragEnd}
              />
            </Route>
          </Switch>
          {todos.length <= 0 && <EmptyTodos />}
          <Footer todos={todos} removeCompletedTodos={removeCompletedTodos} />
        </div>
      </section>
    </Router>
  );
}

export default App;
