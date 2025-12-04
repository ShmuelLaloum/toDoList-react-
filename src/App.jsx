import React, { useState, useEffect } from "react";
import './app.css';
import './index.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import CategoryFilter from "./components/CategoryFilter";
import StatusFilter from "./components/StatusFilter";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [categories, setCategories] = useState(["work", "study", "personal"]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    const categoryMatch = filterCategory === "all" || todo.category === filterCategory;
    const statusMatch =
      filterStatus === "all" ||
      (filterStatus === "completed" && todo.completed) ||
      (filterStatus === "pending" && !todo.completed);
    return categoryMatch && statusMatch;
  });

  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <StatusFilter
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      <CategoryFilter
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />

      <AddTodoForm todos={todos} setTodos={setTodos} categories={categories} />

      <TodoList todos={filteredTodos} setTodos={setTodos} />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
