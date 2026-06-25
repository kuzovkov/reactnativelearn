import { useState } from "react";
import { Todo, Todos } from "@/types/todo";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Learn React Native",
    isCompleted: false
  },
  {
    id: 2,
    title: "Build a Todo App",
    isCompleted: false
  },
  { 
    id: 3,
    title: "Write a blog post about React Native",
    isCompleted: true
  },
];

const useTodo = () => {
  const [todos, setTodos] = useState<Todos>(defaultTodos);

  const addTodo = (title: Todo['title']) => {
    setTodos([...todos, {id: Number(new Date()), title, isCompleted: false}]);
  }

  const onPressDelete = (id: Todo['id']) => { 
    setTodos(todos.filter((t) => t.id !== id)); 
  };

  const onToggleComplete = (id: Todo['id']) => {
    setTodos(todos.map((t) => {
    if (t.id === id) {
      t.isCompleted = !t.isCompleted;
    };
    return t;
  }))};

  const onUpdateTodo = (id: Todo['id'], title: Todo['title']) => {
    console.log('onUpdateTodo', id, title);
    setTodos(todos.map((t) => {
      if (t.id === id) {
        t.title = title;
      };
      return t;
  }))};

  const completedTodos = defaultTodos.filter((t) => t.isCompleted).length;
  
  return {
    todos,
    addTodo,
    onPressDelete,
    onToggleComplete,
    onUpdateTodo,
    completedTodos,
    };
}

export default useTodo;