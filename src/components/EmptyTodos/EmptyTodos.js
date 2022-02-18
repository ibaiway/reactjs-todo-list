import React from "react";
import noItems from "../../img/todoList.png";

function EmptyTodos() {
  return (
    <>
      <div>
        <img src={noItems} alt="todo list" className="noItems" />
      </div>
      <div data-testid="no-todos">
        <h3 className="noItems-add">
          You can create your first todo to get started
        </h3>
      </div>
    </>
  );
}

export default EmptyTodos;
