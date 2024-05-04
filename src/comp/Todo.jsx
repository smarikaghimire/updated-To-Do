import React from "react";

const Todo = ({ todo, onToggle, onDelete, index }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span className="todo-number">{index + 1}.&nbsp; </span>
      <span className="todo-text">{todo.text}</span>
    </li>
  );
};

export default Todo;
