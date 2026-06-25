import Header from "@/layout/Header";
import {COLORS} from "@/constants/ui";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import { useState } from "react";
import { Todo, Todos } from "@/types/todo";
import TodoList from "@/layout/TodoList";
import TodoCreator from "@/layout/TodoCreator";
import useTodo from "@/hooks/useTodo";

export default function Index(){
    const {
        todos,
        addTodo,
        onPressDelete,
        onToggleComplete,
        onUpdateTodo,
        completedTodos,

      } = useTodo();
      
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

