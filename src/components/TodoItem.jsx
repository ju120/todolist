import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label className={todo.completed ? "completed" : ""}>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        {todo.text}
      </label>

      <i onClick={() => deleteTodo(todo.id)} className="fas fa-trash-alt fa-lg"></i>
    </li>
  );
};

export default TodoItem;
