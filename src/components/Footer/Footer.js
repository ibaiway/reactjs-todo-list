import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="list-group-item li-nav">
      <div className="nav-li-first">
        <NavLink to="/complete">{/* INSERT TODO .LENGTH */}items left</NavLink>
      </div>
      <div className="nav-li">
        <NavLink to="/">All</NavLink>
      </div>
      <div className="nav-li">
        <NavLink to="/active">Active</NavLink>
      </div>
      <div className="nav-li">
        <NavLink to="/completed">Completed</NavLink>
      </div>
      <div className="nav-li-last">Clear</div>
      <p className="infoBottom">Drag and drop to reorder list</p>
    </footer>
  );
};
export default Footer;
