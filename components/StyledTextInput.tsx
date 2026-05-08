import { COLORS } from "@/constants/ui";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

type StyleTextInputProps = TextInputProps;  

const StyledTextInput: React.FC<StyleTextInputProps> = ({ ...props }) => { 
  return (
    <TextInput style={[style.input, props.style]} {...props} placeholderTextColor={COLORS.SECONDARY_BORDER}/>
  )
}

const style = StyleSheet.create({
  input: {
    paddingHorizontal : 20,
    paddingVertical: 20,
    color: COLORS.PRIMARY_TEXT,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_BORDER,

  },
  
});

export default StyledTextInput;