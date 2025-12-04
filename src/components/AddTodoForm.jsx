import React, { useState } from 'react';
import { toast } from "react-toastify";

function AddTodoForm({ setTodos, categories }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleAdd = () => {
      if (!text.trim()) {
      toast.error("Task cannot be empty");
      return;
      }
    const newTodo = { id: crypto.randomUUID(), text, category, completed: false };

    setTodos(prevTodos => [...prevTodos, newTodo]);

    setText('');
    toast.success("Task added!");
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a task" 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodoForm;
