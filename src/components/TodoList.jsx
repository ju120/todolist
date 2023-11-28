import React from "react";

const TodoList = ({ displayedTasks, toggleTodo, deleteTodo, colors }) => {
  return (
    <ul className="list-group">
      {displayedTasks.map((todo, index) => (
        <li key={todo.id} className={`list-group-item`} style={{ display: "flex", color: "whitesmoke", backgroundColor: colors[index % colors.length] }}>
          <label className="form-check">
            <input type="checkbox" className="form-check-input" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.text}
          </label>
          <i onClick={() => deleteTodo(todo.id)} className="fas fa-trash-alt fa-lg ml-2"></i>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
