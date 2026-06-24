import { View, StyleSheet, FlatList, Text } from "react-native";
import { Todo } from "@/types/todo";
import React from "react";
import TodoItem from "../TodoItem";

type todoListProps = {
  todos: Todo[];
  onPressDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onUpdateTodo: (id: number, title: string) => void;
}

const TodoList:React.FC<todoListProps> = ({ todos, onPressDelete, onToggleComplete, onUpdateTodo }) => {
  return (
    <View>
      <FlatList 
          data={todos} 
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({item}) => <TodoItem id={item.id} title={item.title} isCompleted={item.isCompleted} onPressDelete={onPressDelete} onToggleComplete={onToggleComplete} onUpdateTodo={onUpdateTodo}/>}
      >
      </FlatList>
    </View>
  );
};

export default TodoList;