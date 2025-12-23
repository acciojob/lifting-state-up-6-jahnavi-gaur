import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  // Initial state with a few items to ensure the list renders correctly
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Project", completed: false }
  ]);

  // Pass the ID of the clicked todo to this function
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
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