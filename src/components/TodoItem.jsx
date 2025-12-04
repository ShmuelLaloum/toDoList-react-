import React from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoItem({ todo, setTodos }) {
  const toggleCompleted = () => {
    setTodos(prev =>
        prev.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t)
    );
  };

  const deleteTodo = () => {
    setTodos(prev => prev.filter(t => t.id !== todo.id));
    toast.info("Task deleted");
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      ({todo.category})
      <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
