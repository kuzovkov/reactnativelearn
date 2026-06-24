import Header from "@/layout/Header";
import {COLORS} from "@/constants/ui";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import { useState } from "react";
import { Todo, Todos } from "@/types/todo";
import TodoList from "@/layout/TodoList";
import TodoCreator from "@/layout/TodoCreator";

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

const completedTodos = defaultTodos.filter((t) => t.isCompleted).length;


export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const addTodo = (title: Todo['title']) => {
    setTodos([...todos, {id: todos.length+1, title, isCompleted: false}]);
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
      
      
  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"}></StatusBar>
      
      <Header totalTodos={todos.length} completedTodos={completedTodos} />  
      <TodoCreator onAddTodo={addTodo} />
      <TodoList todos={todos} onPressDelete={onPressDelete} onToggleComplete={onToggleComplete} onUpdateTodo={onUpdateTodo}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
}); 

