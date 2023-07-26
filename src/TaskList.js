import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, editTask, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
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
