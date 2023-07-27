import React, { useState } from 'react';
import './style/App.css';
import './style/Task.css';
import './style/TaskForm.css';
import './style/TaskList.css';
import './style/RunningTotal.css';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import RunningTotal from './RunningTotal';

const App = () => {
  const [tasks, setTasks] = useState([]);

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

  const countCompletedTasks = () => {
    return tasks.filter((task) => task.completed).length;
  };

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
      <RunningTotal tasks={tasks} />
    </div>
  );
};

export default App;
