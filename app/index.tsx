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

  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"}></StatusBar>
      
      <Header totalTodos={todos.length} completedTodos={completedTodos} />  
      <TodoCreator onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
}); 

