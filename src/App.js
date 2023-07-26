import React, { useState } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (content) => {
    const newTask = {
      id: Date.now(), // Use Date.now() as a simple unique identifier for each task
      content,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className="app">
      <h1>Interactive To-Do List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
