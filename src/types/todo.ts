interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

interface ToDoItemProps {
  todo: ToDo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

interface ToDoListProps {
  todos: ToDo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}