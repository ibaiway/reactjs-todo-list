import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.scss";
import "./styles/media.scss";
import "./components/ListTodo/ListTodo.scss";
import "./components/Footer/Footer.scss";
import "./components/ItemTodo/Checkbox.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
