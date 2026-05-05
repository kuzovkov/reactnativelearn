import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import React from "react";
import { View, Text, StyleSheet } from "react-native"


type headerProps = {
  totalTodos?: number;
  completedTodos?: number;
} 

const Header:React.FC<headerProps> = ({totalTodos, completedTodos}: headerProps) => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.headerMainContent}>Header</StyledText>
      <StyledText>{new Date().toLocaleString()}</StyledText>
      <StyledText>Completed: {completedTodos} / {totalTodos}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: COLORS.SECONDARY_BACKGROUND
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  }
  
  
})  


export default Header;