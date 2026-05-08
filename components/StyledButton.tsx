//onPress
//TochableOpacity
//Pressable

import { StyleSheet, TouchableOpacity} from "react-native";
import { TouchableOpacityProps } from "react-native";
import StyledText from "./StyledText";
import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";

type StyledButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  size?: "small" | "default" | "large";
  variant?: "primary" | "delete";
}

const StyledButton: React.FC<StyledButtonProps> = ({label, icon, size='default', variant='primary', ...props}) => {
  return (
    <TouchableOpacity 
      style={[styles.base, 
        size === 'small' && styles.small, size === 'large' && styles.large,
        variant === 'primary' && styles.variantPrimary,
        variant === 'delete' && styles.variantDelete
      ]} {...props}
    >
      {label && <StyledText>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={20} color={COLORS.PRIMARY_TEXT} />}
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
  small: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  variantPrimary: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
  },
  variantDelete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
});

export default StyledButton;