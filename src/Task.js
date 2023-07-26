import React from 'react';

const Task = ({ task, onComplete, onDelete }) => {
  const handleComplete = () => {
    // Call the onComplete function with the task ID to mark it as completed
    onComplete(task.id);
  };

  const handleDelete = () => {
    // Call the onDelete function with the task ID to remove it from the list
    onDelete(task.id);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <p>{task.content}</p>
      </div>
      <div className="task-actions">
        {!task.completed && (
          <button className="btn-complete" onClick={handleComplete}>
            Complete
          </button>
        )}
        <button className="btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
