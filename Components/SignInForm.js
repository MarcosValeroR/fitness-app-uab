import React from "react";
import { Text, View, StyleSheet } from "react-native";

function SignInForm() {
  return (
    <View style={styles.container}>
      <Text>Sign in form</Text>
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
export default SignInForm;
