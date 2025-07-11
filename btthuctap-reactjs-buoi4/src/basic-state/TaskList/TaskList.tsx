import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onTaskToggle: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskToggle }) => {
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="task-list">
      <h3>Task List</h3>
      <p>{completedCount} of {tasks.length} tasks completed</p>

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={() => onTaskToggle(task.id)}
        />
      ))}

      <div className="task-actions">
        <button className="btn-primary">Add Task</button>
        <button className="btn-secondary">Clear Completed</button>
      </div>
    </div>
  );
};

export default TaskList;
