import StyledButton from "@/components/StyledButton";
import StyledCheckbox from "@/components/StyledCheckbox";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { View, StyleSheet } from "react-native";
import { Todo } from "@/types/todo";
import EditTodoModal from "@/layout/Modals/EditTodoModal";
import { useState } from "react";
import DeleteTodoModal from "@/layout/Modals/DeleteTodoModal";

type todoItemProps = Todo & {
  onPressDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onUpdateTodo: (id: number, title: string) => void;
}

const TodoItem = ({id, title, isCompleted, onPressDelete, onToggleComplete, onUpdateTodo}: todoItemProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  return (
    <View style={isCompleted ? styles.completedContainer : styles.container}>
      <View style={styles.checkTitleContainer}>
        <StyledCheckbox checked={isCompleted} onChange={() => onToggleComplete(id)} />
        <StyledText style={isCompleted ? styles.completedText : undefined}>{title}</StyledText>  
      </View>
     
      <View style={styles.controlsContailer}>
        <StyledButton icon="pencil" size="small" onPress={() => setIsEditModalOpen(true)}/>
        <EditTodoModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onUpdate={onUpdateTodo} title={title} id={id}/>
        <StyledButton icon="trash" size="small" variant="delete" onPress={() => setIsDeleteModalOpen(true)}/>
        <DeleteTodoModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onDeleteTodo={() => onPressDelete(id)} id={id} title={title}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderRadius: 5,
  },
  completedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderRadius: 5,
  },
  completedText: {
    textDecorationLine: "line-through",
  },
  controlsContailer: {
    flexDirection: "row",
    gap: 5,
  },
  checkTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default TodoItem;