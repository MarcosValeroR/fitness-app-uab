import { View, Text, StyleSheet } from "react-native";

const Counter = ({ displayTime }) => {
  return (
    <View style={styles.counter}>
      <Text style={styles.txt}>Temps</Text>
      <Text style={styles.txt}>{displayTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
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
export default Counter;
