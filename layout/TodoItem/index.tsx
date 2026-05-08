import StyledButton from "@/components/StyledButton";
import StyledCheckbox from "@/components/StyledCheckbox";
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
      <View style={styles.checkTitleContainer}>
        <StyledCheckbox checked={isCompleted} onChange={() => console.log("pressed")} />
        <StyledText style={isCompleted ? styles.completedText : undefined}>{title}</StyledText>  
      </View>
     
      <View style={styles.controlsContailer}>
        <StyledButton icon="pencil" size="small" onPress={() => console.log("pressed")}/>
        <StyledButton icon="trash" size="small" variant="delete" onPress={() => console.log("pressed")}/>
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