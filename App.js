import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import InitialCard from "./Components/InitialCard";

export default function App() {
  return (
    <View style={styles.container}>
      <InitialCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3B6C6",
    alignItems: "center",
    justifyContent: "center",
  },
});
