import React, { useState } from "react";
import ListTodo from "./components/ListTodo";

function App() {
  const defaultTodos = [
    { text: "Clean kitchen", done: true },
    { text: "Do the laundry", done: false },
    { text: "Buy bread", done: true },
    { text: "Code all night", done: false },
  ];

  const [todos, setTodos] = useState([...defaultTodos]);

  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">
          <h1>Hola mundo</h1>
          <ListTodo todos={todos} />
          <button
            type="button"
            onClick={() =>
              setTodos([...todos, { text: "prueba", done: false }])
            }
          >
            Click me
          </button>
          <button
            type="button"
            onClick={() => setTodos([...todos, { text: "prueba", done: true }])}
          >
            Click me done
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
