import React from 'react';

interface ToDoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  id, text, completed, toggleComplete, deleteTodo
}) => {
  return (
    <li className="flex items-center justify-between mb-2">
      <span
        className={`text-lg ${completed ? 'line-through' : ''}`}
        onClick={() => toggleComplete(id)}
        style={{ cursor: 'pointer' }}
      >
        {text}
      </span>
      <button
        className="bg-red-600 text-white p-2"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
