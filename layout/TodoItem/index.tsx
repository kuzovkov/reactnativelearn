import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { View, StyleSheet } from "react-native";

type todoItemProps = {
  id: number;
  title: string;
  isCompleted: boolean;
}

const TodoItem = ({id, title, isCompleted}: todoItemProps) => {
  return (
    <View style={isCompleted ? styles.completedContainer : styles.container}>
      <StyledText style={isCompleted ? styles.completedText : undefined}>{title}</StyledText>
      <StyledButton label={isCompleted ? "Undo" : "Complete"} onPress={() => {}} />
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
});

export default TodoItem;