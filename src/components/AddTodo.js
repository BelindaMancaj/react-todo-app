import React, { useState } from "react";
import "./AddTodo.css";
import TodoList from "./TodoList";

const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const addTodos = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value.match("^(?=.*[a-zA-Z0-9])")) {
        return;
      }
      let todoObj = {
        id: Math.floor(Math.random() * 10000),
        text: e.target.value,
        isCompleted: false,
      };
      setTodos([...todos, todoObj]);
      e.target.value = "";
    }
  };

  const removeTodos = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const completedTodos = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div id="container">
      <h1>To-Do List</h1>
      <input id="todo-input" placeholder="Add New To-Do" onKeyDown={addTodos} />
      <TodoList
        todos={todos}
        removeTodos={removeTodos}
        completedTodos={completedTodos}
      />
    </div>
  );
};

export default AddTodo;
