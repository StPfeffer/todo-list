import React from 'react';
import ToDoItem from '../todo/ToDoItem';

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoListProps {
  todos: ToDo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          title={todo.text}
          completed={todo.completed}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
