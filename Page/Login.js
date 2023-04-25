import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Login() {
  return (
    <View style={styles.container}>
      <Text>Log in form</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#A3B6C6",
  },
});
export default Login;
