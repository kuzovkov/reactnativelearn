import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { View, Text, StyleSheet } from "react-native"

const Header = () => {
  return (
    <View style={styles.container}>
      <StyledText>Header</StyledText>
      <StyledText>{new Date().toLocaleString()}</StyledText>
      <StyledText>Completed: 0/0</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: COLORS.SECONDARY_BACKGROUND
  },
  
  
})  


export default Header;