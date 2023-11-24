import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <form>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </form>
  );
};
export default TodoList;
