import React from "react";

import backgroundMain from "./img/image-main.jpg";

function App() {
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
          <ul>
            <li className="list-group-item li">Hola</li>
            <li className="list-group-item li">Hola</li>
            <li className="list-group-item li">Hola</li>
            <li className="list-group-item li">Hola</li>
            <nav className="list-group-item li-nav">
              <ul>
                <li className="nav-li-first">5 items left</li>
                <li className="nav-li">All</li>
                <li className="nav-li">Active</li>
                <li className="nav-li">Completed</li>
                <li className="nav-li-last">Clear Completed</li>
              </ul>
            </nav>
          </ul>
        </div>
      </section>
      <footer>Drag and drop to reorder list</footer>
    </>
  );
}

export default App;
