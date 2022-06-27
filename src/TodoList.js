import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState } from "./selectors";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div style={{ padding: "20px 0" }}>
        <TodoListStats />
      </div>
      <div style={{ padding: "20px 0" }}>
        <TodoListFilters />
      </div>
      <div style={{ padding: "20px 0" }}>
        <TodoItemCreator />
      </div>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
