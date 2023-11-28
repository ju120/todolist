import React, { useState, useEffect } from "react";
import TodoFilterButtons from "./TodoFilterButtons";
import TodoList from "./TodoList";

const TodoFilter = ({ todos, setTodos }) => {
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [colors] = useState(["#834EA8", "#B48DD2", "#834EA8", "#B48DD2", "#834EA8", "#B48DD2"]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTodos(JSON.parse(storedTasks));
    }
  }, [setTodos]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setDisplayedTasks([...todos]);
  }, [todos]);

  const toggleTodo = (id) => {
    const updatedTasks = todos.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    setTodos(updatedTasks);
  };

  const deleteTodo = (id) => {
    const updatedTasks = todos.filter((task) => task.id !== id);
    setTodos(updatedTasks);
  };

  const filterTasks = (filterType) => {
    switch (filterType) {
      case "completed":
        setDisplayedTasks(todos.filter((todo) => todo.completed));
        break;
      case "active":
        setDisplayedTasks(todos.filter((todo) => !todo.completed));
        break;
      default:
        setDisplayedTasks([...todos]);
    }
  };

  return (
    <div className="container">
      <TodoFilterButtons filterTasks={filterTasks} setTodos={setTodos} />
      <TodoList displayedTasks={displayedTasks} toggleTodo={toggleTodo} deleteTodo={deleteTodo} colors={colors} />
    </div>
  );
};

export default TodoFilter;
