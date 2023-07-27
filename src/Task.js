import React, { useState } from 'react';

const Task = ({ task, editTask, toggleTaskCompletion, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(task.content);

  const handleEditInputChange = (event) => {
    setNewContent(event.target.value);
  };

  const handleEditButtonClick = () => {
    if (isEditing) {
      editTask(task.id, newContent);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        {isEditing ? (
          <input
            type="text"
            value={newContent}
            onChange={handleEditInputChange}
            autoFocus
            onFocus={(e) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)} // Move cursor to the end
          />
        ) : (
          <p className="task-text">{task.content}</p>
        )}
      </div>
      <div className="task-actions">
        {isEditing ? (
          <button className="btn-edit" onClick={handleEditButtonClick}>
            Save
          </button>
        ) : (
          <>
            <button
              className={`btn-complete ${task.completed ? 'btn-unmark' : ''}`}
              onClick={() => toggleTaskCompletion(task.id, !task.completed)}
            >
              {task.completed ? 'Unmark' : 'Complete'}
            </button>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
