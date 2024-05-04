import React, { useState } from "react";

const Todo = ({ todo, onToggle, onDelete, index }) => {
  const [deleted, setDeleted] = useState(false);

  const handleToggle = () => {
    onToggle(todo.id);
    setDeleted(true); // Set deleted state to true when toggling
    setTimeout(() => {
      onDelete(todo.id); // Delete the todo item after 2 seconds
    }, 2000);
  };

  if (deleted) {
    return null; // Return null to hide the todo item when deleted
  }

  return (
    <li className={todo.completed ? "completed" : ""}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span className="todo-number">{index + 1}.&nbsp; </span>
      <span className="todo-text">{todo.text}</span>
    </li>
  );
};

export default Todo;
