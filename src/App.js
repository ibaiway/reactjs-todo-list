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
            <h2>Hola</h2>
          </div>
        </div>
        <div className="main-item-list">
          <ul>
            <li className="list-group-item list-group-item-action li">Hola</li>
            <li className="list-group-item list-group-item-action li">Hola</li>
            <li className="list-group-item list-group-item-action li">Hola</li>
            <li className="list-group-item list-group-item-action li">Hola</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
