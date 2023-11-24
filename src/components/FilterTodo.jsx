import React from "react";

const FilterTodo = ({ todos, setTodos }) => {
  const showCompleted = () => {
    const completedTasks = todos.filter((todo) => todo.completed);
    setTodos(completedTasks);
  };

  const showActive = () => {
    const activeTasks = todos.filter((todo) => !todo.completed);
    setTodos(activeTasks);
  };

  const deleteAllTasks = () => {
    setTodos([]);
  };

  return (
    <div>
      <button onClick={showCompleted}>Show Completed</button>
      {todos.some((todo) => todo.completed)}
      <button onClick={showActive}>Show Active</button>
      <button onClick={deleteAllTasks}>Delete All</button>
    </div>
  );
};

export default FilterTodo;
