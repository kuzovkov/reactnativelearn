//onPress
//TochableOpacity
//Pressable

import { StyleSheet, TouchableOpacity} from "react-native";
import { TouchableOpacityProps } from "react-native";
import StyledText from "./StyledText";
import { COLORS } from "@/constants/ui";

type StyledButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  label?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({label, ...props}) => {
  return (
    <TouchableOpacity style={styles.base} {...props}>
      {label && <StyledText>{label}</StyledText>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
  },
}); 

export default StyledButton;