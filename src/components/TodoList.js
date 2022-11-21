import React, { useState } from "react";
import "./TodoList.css";
import { DeleteOutlined } from "@ant-design/icons";

const TodoList = ({ todos, removeTodos, completedTodos }) => {
  return (
    <ul id="todo-list">
      {todos.map((todo) => {
        return (
          <div className="todo-container">
            <span onClick={() => removeTodos(todo.id)}>
              {" "}
              <DeleteOutlined />
            </span>
            <li
              className={todo.isCompleted ? "completed" : ""}
              key={todo.id}
              onClick={() => completedTodos(todo.id)}
            >
              {todo.text}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default TodoList;
