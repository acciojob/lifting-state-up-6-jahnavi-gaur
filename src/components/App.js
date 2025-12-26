import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  // Initial state with a few items to ensure the list renders correctly
  const [todos, setTodos] = useState([
    { id: 1, todo: "Learn React", isComplete: false },
    { id: 2, todo: "Build a Project", isComplete: false }
  ]);

  // Pass the ID of the clicked todo to this function
  // Inside App.js
  const handleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isComplete: true } : todo
      )
    );
  };

  return (
    <div className="parent">
      <h1>Todo App</h1>
      {/* Pass the function as a prop */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;