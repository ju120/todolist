import React from "react";

const TodoFilterButtons = ({ filterTasks, setTodos }) => {
  return (
    <div className="btn-group d-flex justify-content-center mt-4">
      <button className="btn btn-primary mx-1 rounded-2 mb-1" onClick={() => filterTasks("completed")}>
        Completed
      </button>
      <button className="btn btn-primary mx-1 rounded-2 mb-1" onClick={() => filterTasks("active")}>
        Active
      </button>
      <button className="btn btn-primary mx-1  rounded-2 mb-1" onClick={() => filterTasks("all")}>
        All
      </button>
      <button className="btn btn-secondary mx-1 rounded-2 mb-1 " onClick={() => setTodos([])}>
        Delete All
      </button>
    </div>
  );
};

export default TodoFilterButtons;
