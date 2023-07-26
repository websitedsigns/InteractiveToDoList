import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter your task here..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
