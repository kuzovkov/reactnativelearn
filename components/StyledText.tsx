import { Text, StyleSheet, TextProps } from "react-native"
import { COLORS } from "@/constants/ui"

type StyledTextProps = TextProps


const StyledText:React.FC<StyledTextProps> = ({style, ...props }) => {

  return (
    <Text style={[styles.base, style]} {...props}>
    </Text>
  )
}

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
});

export default StyledText;