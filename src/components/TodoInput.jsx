import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

const TodoInput = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleAddTodo}>
        <Form.Group controlId="todoInput" className="d-flex justify-content-center align-items-center">
          <Form.Control type="text" value={newTodo} onChange={handleInputChange} placeholder="Add:" style={{ width: "350px" }} />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TodoInput;
