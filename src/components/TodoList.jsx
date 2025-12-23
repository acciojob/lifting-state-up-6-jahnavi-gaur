import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {/* Ensure the text is visible for the test to find */}
          {todo.text}
          
          {/* The test is looking for a button. 
            When clicked, it triggers the parent's state update.
          */}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;