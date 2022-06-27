import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState } from "./selectors";
import { todoListState } from "./atoms";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TodoList() {
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onDragEnd = (result) => {
    console.log(result, "aaa");
    const { destination } = result;

    if (!destination) return;
    const items = Array.from(filteredTodoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodoList(items);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2 style={{ margin: "5px" }}>Draggable todo list</h2>
      <div style={{ margin: "20px 0" }}>
        <h4 style={{ margin: "5px" }}>List stats</h4>
        <TodoListStats />
      </div>
      {/* <div style={{ margin: "20px 0" }}>
        <h4 style={{ margin: "5px" }}>List Filters</h4>
        <TodoListFilters />
      </div> */}
      <div style={{ margin: "20px 0" }}>
        <h4 style={{ margin: "5px" }}>Create an item</h4>
        <TodoItemCreator />
      </div>
      {filteredTodoList.length ? (
        <h4 style={{ margin: "8px" }}>Draggable Todo Items</h4>
      ) : null}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="filteredTodoList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {filteredTodoList.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.text + index.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem item={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
