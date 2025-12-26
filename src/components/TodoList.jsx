import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      
    <ul>
      <h2>Child Component</h2>
      {todos.map((todo) => (
        <li key={todo.id}>
          {/* Ensure the text is visible for the test to find */}
          {todo.todo}
          
          {/* The test is looking for a button. 
            When clicked, it triggers the parent's state update.
          */}
          {!todo.isComplete && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
// div ul h2 {todos.map()}