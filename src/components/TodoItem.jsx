import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label className={todo.completed ? "completed" : ""}>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        {todo.text}
      </label>
      <button id="del-btn" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
