import StyledText from "@/components/StyledText";
import { View, Text } from "react-native";

type todoItemProps = {
  id: number;
  title: string;
  isCompleted: boolean;
}

const TodoItem = ({id, title, isCompleted}: todoItemProps) => {
  return (
    <StyledText>{title}</StyledText>
  );
}

export default TodoItem;