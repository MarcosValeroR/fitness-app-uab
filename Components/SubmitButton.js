import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
function SubmitButton({ text, handleSubmit }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        handleSubmit();
      }}
    >
      <Text style={styles.txtBtn}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#FFFFFF",
    padding: 2,
    width: 190,
    height: 35,
    alignSelf: "center",
    marginTop: 35,
    borderColor: "#000000",
    borderWidth: 3,
  },
  txtBtn: {
    fontWeight: "900",
    fontSize: 18,
    alignSelf: "center",
    paddingTop: 1,
  },
});

export default SubmitButton;
