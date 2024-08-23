import React from 'react';
import ToDoItem from '../todo/ToDoItem';

const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
