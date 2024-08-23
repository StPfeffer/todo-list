"use client";

import React, { useState } from 'react';
import ToDoList from '@/components/todoList/TodoList';
import ToDoInput from '@/components/todo/CreateToDo';

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodo = (title: string) => {
    const newTodoItem: ToDo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ToDo List</h1>
      <ToDoInput addTodo={addTodo} />
      <ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </main>
  );
};

export default TodoPage;
