import { View, Text, StyleSheet } from "react-native";

const Speed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Velocitat(km/h)</Text>
      <Text style={styles.txt}>20.2</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontWeight: "bold",
    fontSize: 12,
  },
});
export default Speed;
