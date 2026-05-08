type TodoCreatorProps = {
  onAddTodo: (title: string) => void;
}

import { View, StyleSheet } from "react-native";
import StyledText from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import StyledButton from "@/components/StyledButton";
import { COLORS } from "@/constants/ui";

const TodoCreator: React.FC<{onAddTodo: (title: string) => void}> = ({onAddTodo}) => {
  return (
    <View style={styles.container}>
      <StyledTextInput placeholder="Enter todo title" />
      <StyledButton label="+" onPress={() => console.log("pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
});

export default TodoCreator;