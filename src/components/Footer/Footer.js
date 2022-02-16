import React from "react";

function Footer() {
  return (
    <footer className="list-group-item li-nav">
      <a href="http://localhost:3000" className="nav-li-first">
        {/* INSERT TODO .LENGTH */}items left
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
      <p className="infoBottom">Drag and drop to reorder list</p>
    </footer>
  );
}
export default Footer;
