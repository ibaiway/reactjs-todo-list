import React from "react";
import { NavLink } from "react-router-dom";

function Footer({ todos, removeCompletedTodos }) {
  const todosLength = todos.length;

  const handleRemove = () => {
    removeCompletedTodos();
  };
  return (
    <footer className="list-group-item li-nav">
      <div className="nav-li-first">
        <NavLink to="/complete">{todosLength} items left</NavLink>
      </div>
      <div className="nav-li">
        <NavLink exact to="/" activeClassName="is-active">
          All
        </NavLink>
      </div>
      <div className="nav-li">
        <NavLink exact to="/active" activeClassName="is-active">
          Active
        </NavLink>
      </div>
      <div className="nav-li">
        <NavLink exact to="/completed" activeClassName="is-active">
          Completed
        </NavLink>
      </div>
      <div className="nav-li-last">
        <button type="button" onClick={handleRemove}>
          Remove
        </button>
      </div>
      <p className="infoBottom">Drag and drop to reorder list</p>
    </footer>
  );
}
export default Footer;
