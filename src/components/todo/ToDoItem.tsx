import React from 'react';

const ToDoItem: React.FC<ToDoItemProps> = ({
  id, title: text, completed, toggleComplete, deleteTodo
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
