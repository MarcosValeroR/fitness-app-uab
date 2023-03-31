import React from "react";
import { Text, View, StyleSheet } from "react-native";

function LoginForm() {
  return (
    <View style={styles.container}>
      <Text>Login Form</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#A3B6C6"
  },
});
export default LoginForm;
