import { View, Text, StyleSheet } from "react-native";

const Distance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Distància (km)</Text>
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
export default Distance;
