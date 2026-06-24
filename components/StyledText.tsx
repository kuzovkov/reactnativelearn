import { Text, StyleSheet, TextProps } from "react-native"
import { COLORS } from "@/constants/ui"

type StyledTextProps = TextProps & {
  variant?: "primary" | "title" | "subtitle" | "heading" | "small";
}


const StyledText:React.FC<StyledTextProps> = ({style, variant="primary", ...props }) => {
  const variantStyle = variant ? styles[variant] : null;

  return (
    <Text style={[styles.base, variantStyle, style]} {...props}>
    </Text>
  )
}

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
  primary: {},
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "bold",
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default StyledText;