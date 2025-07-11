import React from 'react';
import './TaskItem.css';

interface TaskItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ text, completed, onToggle }) => {
  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <label>
        <input type="checkbox" checked={completed} onChange={onToggle} />
        <span className="task-text">{text}</span>
      </label>
    </div>
  );
};

export default TaskItem;
