import React, { useState } from "react";

const Todo = ({ todo, onToggle, onDelete, index }) => {
  const [isToggledForDeletion, setIsToggledForDeletion] = useState(false);

  const handleToggle = () => {
    onToggle(todo.id);
    setIsToggledForDeletion(true);

    setTimeout(() => {
      onDelete(todo.id);
    }, 2000);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span className="todo-number">{index + 1}.&nbsp; </span>
      <span className={`todo-text ${isToggledForDeletion ? "crossed" : ""}`}>
        {todo.text}
      </span>
    </li>
  );
};

export default Todo;
