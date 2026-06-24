type TodoCreatorProps = {
  onAddTodo: (title: string) => void;
}

import { View, StyleSheet } from "react-native";
import StyledText from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import StyledButton from "@/components/StyledButton";
import { COLORS } from "@/constants/ui";
import React, { useEffect } from "react";

const TodoCreator: React.FC<{onAddTodo: (title: string) => void}> = ({onAddTodo}) => {
  const [text, setText] = React.useState("");
  const [inputError, setInputError] = React.useState("");

  const onPressAdd = () => {
    if (!text.trim()) {
      setInputError("Todo title is required");
      return;
    }
    onAddTodo(text.trim());
    setText("");
    setInputError("");
  };

  useEffect(() => {
    if (inputError && text.trim()) {
      setInputError("");
    }
  }, [text]);
  
  return (
    <View style={styles.container}>
      <StyledTextInput placeholder="Enter todo title"
       value={text}
       onChangeText={setText} 
       isError={!!inputError}
       />
      <StyledButton size="large" label="+" onPress={onPressAdd} disabled={!!inputError} />
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