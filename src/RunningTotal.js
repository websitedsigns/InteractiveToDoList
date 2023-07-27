import React from 'react';

const RunningTotal = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  const calculatePercentage = () => {
    if (totalTasks === 0) {
      return 0;
    }
    return ((completedTasks / totalTasks) * 100).toFixed(2);
  };

  return (
    <div className="running-total">
      <p>
        Running Total: {completedTasks} / {totalTasks} ({calculatePercentage()}%) completed
      </p>
    </div>
  );
};

export default RunningTotal;
