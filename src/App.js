import React, { useState, useEffect } from 'react';
import './style/App.css';
import './style/Task.css';
import './style/TaskForm.css';
import './style/TaskList.css';

import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks && Array.isArray(storedTasks)) {
      setTasks(storedTasks);
    }
  }, []);

  const addTask = (task) => {
    const newTask = { id: Date.now(), content: task, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (taskId, newContent) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, content: newContent } : task))
    );
  };

  const toggleTaskCompletion = (taskId, isCompleted) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, completed: isCompleted } : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Update local storage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <h1>Interactive To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
