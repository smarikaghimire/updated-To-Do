import React, { useState, useEffect } from "react";
import Todo from "./comp/Todo";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = { id: Date.now(), text: newTodoText, completed: false };
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    } else {
      window.alert("Invalid input!");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    if (todos.length > 0) {
      localStorage.removeItem("todos");
      setTodos([]);
    } else {
      window.alert("Invalid input!");
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <hr className="hr"></hr>
      <input
        type="text"
        className="input-field"
        placeholder="E.g Prepare Food ..."
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />
      <button className="add-button" onClick={addTodo}>
        Add Todo
      </button>
      <button className="reset-button" onClick={resetTodos}>
        Reset Todos
      </button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            index={index}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
