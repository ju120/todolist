import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import "./index.css";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: crypto.randomUUID(), text: newTodo, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h2 style={{ color: "whitesmoke", padding: "1em" }}>MY TASKS</h2>

      <TodoInput addTodo={addTodo} />
      <TodoFilter todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
