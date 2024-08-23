import React, { useState } from 'react';

interface ToDoInputProps {
  addTodo: (text: string) => void;
}

const ToDoInput: React.FC<ToDoInputProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="border p-2 mr-2 text-black bg-white"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
      />
      <button
        className="bg-blue-600 text-white p-2"
        onClick={handleAddTodo}
      >
        Adicionar
      </button>
    </div>
  );
};

export default ToDoInput;
