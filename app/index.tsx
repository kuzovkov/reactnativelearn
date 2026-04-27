import Header from "@/layout/Header";
import {COLORS} from "@/constants/ui";
import { Text, View, StatusBar, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"}></StatusBar>
      <Header />  
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
}); 

