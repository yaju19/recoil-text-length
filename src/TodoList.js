import React from "react";
import { useRecoilState } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState } from "./selectors";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TodoList() {
  const [todoList, setTodoList] = useRecoilState(filteredTodoListState);

  const onDragEnd = (result) => {
    console.log(result, "aaa");
    const { destination } = result;

    if (!destination) return;
    const items = Array.from(todoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    console.log(reorderedItem);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);

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
      <div style={{ margin: "20px 0" }}>
        <h4 style={{ margin: "5px" }}>List Filters</h4>
        <TodoListFilters />
      </div>
      <div style={{ margin: "20px 0" }}>
        <h4 style={{ margin: "5px" }}>Create an item</h4>
        <TodoItemCreator />
      </div>
      {todoList.length ? (
        <h4 style={{ margin: "8px" }}>Draggable Todo Items</h4>
      ) : null}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todoList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.value} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                      <TodoItem
                        key={item.id}
                        item={item}
                        {...provided.dragHandleProps}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
          {/* {todoList.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))} */}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
