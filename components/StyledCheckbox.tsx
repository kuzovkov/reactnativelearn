import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

type StyledCheckboxProps = {
  checked?: boolean;
  onChange?: () => void;
}

const StyledCheckbox:React.FC<StyledCheckboxProps> = ({onChange, checked}: StyledCheckboxProps) => {
  return (
    <TouchableOpacity onPress={onChange}>
      <Ionicons name={checked ? "checkmark-circle" : "ellipse-outline"} size={24} color={checked ? COLORS.SUCCSESS_GREEN : COLORS.PRIMARY_BORDER}/>
    </TouchableOpacity>
  );
}

export default StyledCheckbox;