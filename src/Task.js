import React, { useState } from 'react';

const Task = ({ task, editTask, toggleTaskCompletion, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(task.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedContent.trim() !== '') {
      editTask(task.id, editedContent);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedContent(task.content);
  };

  const handleToggleComplete = () => {
    toggleTaskCompletion(task.id, !task.completed);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="task-content">
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        </div>
      ) : (
        <div className="task-content">
          <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.content}</p>
        </div>
      )}
      <div className="task-actions">
        {isEditing ? (
          <>
            <button className="btn-save" onClick={handleSave}>
              Save
            </button>
            <button className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="btn-edit" onClick={handleEdit}>
              Edit
            </button>
            {task.completed ? (
              <button className="btn-unmark" onClick={handleToggleComplete}>
                Unmark
              </button>
            ) : (
              <button className="btn-complete" onClick={handleToggleComplete}>
                Complete
              </button>
            )}
            <button className="btn-delete" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
