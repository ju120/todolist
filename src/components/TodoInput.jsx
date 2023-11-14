import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Add:" />
      <button id="add-btn" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
