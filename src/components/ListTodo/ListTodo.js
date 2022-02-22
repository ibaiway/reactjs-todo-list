import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ItemTodo from "../ItemTodo";

function ListTodo({
  todos,
  toogleItemTodo,
  removeTodo,
  toogleEdit,
  editTodo,
  handleOnDragEnd,
}) {
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            data-testid="todos-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map(({ id, text, done, isEditing }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {/*                eslint-disable-next-line no-shadow */}
                {(provided) => (
                  <li
                    data-testid="todo-item"
                    className="list-group-item li"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ItemTodo
                      text={text}
                      done={done}
                      id={id}
                      toogleItemTodo={toogleItemTodo}
                      removeTodo={removeTodo}
                      toogleEdit={toogleEdit}
                      isEditing={isEditing}
                      editTodo={editTodo}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListTodo;
