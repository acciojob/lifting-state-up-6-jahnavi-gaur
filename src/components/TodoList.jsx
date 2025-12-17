import React, { useState } from "react";

const TodoList = ({ todos, handleComplete }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}

                    {!todo.completed ? (
                        <button onClick={() => handleComplete(todo.id)}>
                            Complete
                        </button>
                    ) : (
                        <span> </span>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default TodoList