import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, editTask, toggleTaskCompletion, deleteTask }) => {
  // Sort tasks so that completed tasks come after active tasks
  const sortedTasks = [...tasks].sort((a, b) => (a.completed && !b.completed ? 1 : -1));

  return (
    <div className="task-list">
      {sortedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
