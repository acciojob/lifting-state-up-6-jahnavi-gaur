import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false }
  ]);

  const handleComplete = () => {
    setTodos([
      { id: 1, text: "Learn React", completed: true }
    ]);
  };

  return (
    <div className="parent">
      <h1>Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
