import { View, Text, StyleSheet } from "react-native";

const Speed = ({ speed}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Velocitat (m/s)</Text>
      <Text style={styles.txt}>{speed.toFixed(1)}</Text>
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
