import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

function LoginContainer({
  userMail,
  userPasswd,
  handleChangeMail,
  handleChangePasswd,
  handleSubmit
}) {
  return (
    <View style={styles.container}>
      <Input
        containerStyle={{ marginBottom: 10 }}
        textStyle={styles.txt}
        labelText={"Correu electrònic"}
        inputStyle={styles.inpt}
        initialValue={userMail}
        handleChange={handleChangeMail}
      />
      <Input
        containerStyle={{ marginBottom: 10 }}
        textStyle={styles.txt}
        labelText={"Contrassenya"}
        inputStyle={styles.inpt}
        initialValue={userPasswd}
        handleChange={handleChangePasswd}
        secure={true}
      />
      <SubmitButton text={"SEGÜENT"} handleSubmit={handleSubmit} screenToNavigate={"InitialScreen"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    height: 289,
    width: 330,
    alignSelf: "center",
    marginTop: 25,
    borderWidth: 2,
    alignItems: "center",
    paddingTop: 60,
  },
  txt: {
    margin: 2,
    fontSize: 20,
    fontWeight: "bold",
  },
  inpt: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: 298,
    height: 31,
    color: "black",
    borderColor: "black",
    borderWidth: 2,
    shadowOffset: { width: 0, height: -3 },
    shadowColor: "black",
  },
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

export default LoginContainer;
