interface ToDoItemProps {
  id: number;
  title: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}