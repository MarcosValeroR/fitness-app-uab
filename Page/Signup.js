import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Button,
} from "react-native";
import Header from "../Components/Header";
import GenderPicker from "../Components/GenderPicker";
import Input from "../Components/Input";
import BornDate from "../Components/BornDate";

const windowWidth = Dimensions.get("window").width;

function SignUp() {
  //Dades del usuari
  const [gender, setGender] = useState("");
  const [userName, setUserName] = useState("");
  const [birthdayDate, setBirthdayDate] = useState(new Date());
  const [userMail, setUserMail] = useState("");
  const [userPasswd, setUserPasswd] = useState("");

  //Estats interns
  const [open, setOpen] = useState(false);
  const genderOptions = [
    { label: "Sense especificar", value: "no_specify" },
    { label: "Masculí", value: "masculi" },
    { label: "Femení", value: "femeni" },
    { label: "No binari", value: "no_binari" },
  ];

  const handleChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || birthdayDate;
    setBirthdayDate(currentDate);
  };

  const handleGenderPicker = (value) => {
    setGender(value)
  }
  const handleChangeName = (value) => {
    setUserName(value)
  }
  const handleChangeMail = (value) => {
    setUserMail(value)
  }
  const handleChangePasswd = (value) => {
    setUserPasswd(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"REGISTRE NOU USUARI"}/>
      <View style={styles.bodyScreen}>
        <View style={styles.form}>
          <GenderPicker gender={gender} handleGenderPicker={handleGenderPicker} inputStyle={styles.input} textStyle={styles.txt} inputPickerStyle={styles.inptPicker}/>
          <Input containerStyle={styles.input} textStyle={styles.txt} labelText={"Nom"} inputStyle={styles.inpt} initialValue={userName} handleChange={handleChangeName}/>
          <BornDate containerStyle={styles.input} textStyle={styles.txt} inputStyle={styles.inpt} initialValue={birthdayDate} btnStyle={styles.btn} textBtnStyle={styles.txtBtn} handleChangeDate={handleChangeDate}/>
          <Input containerStyle={styles.input} textStyle={styles.txt} labelText={"Correu electrònic"} inputStyle={styles.inpt} initialValue={userMail} handleChange={handleChangeMail} />
          <Input containerStyle={styles.input} textStyle={styles.txt} labelText={"Contrassenya"} inputStyle={styles.inpt} initialValue={userPasswd} handleChange={handleChangePasswd} secure={true}/>
          <View style={styles.submitbtn}><Button title="Registra't"/></View>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  submitbtn: {
    position: "relative",
    marginTop: 50,
    alignSelf: "center",
    width: windowWidth - 30,
  },
  btn: {
    backgroundColor: "#DBE9EC",
    padding: 2,
    width: 100,
    alignSelf: "center",
    marginTop: 10,

    borderColor: "#000000",
    borderWidth: 2,
  },

  txtBtn: {
    fontWeight: "900",
    fontSize: 14,
    alignSelf: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#A3B6C6",
    paddingTop: StatusBar.currentHeight,
  },
  headerScreen: {
    flex: 0.8,
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 4,
    alignItems: "center",
  },

  arrowLeft: {
    marginTop: 12,
    width: "100%",
  },

  txtTitle: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: "900",
    width: "80%",
    textAlign: "center",
  },

  inptPicker: {
    backgroundColor: "white",
    width: windowWidth - 30,
  },

  inpt: {
    padding: 10,
    backgroundColor: "white",
    width: windowWidth - 30,
    height: 50,
    color: "black",
  },
  txt: {
    margin: 2,
    fontSize: 20,
    fontWeight: "bold",
  },

  bodyScreen: {
    marginTop: 20,
    flex: 10,
    width: "100%",
    alignItems: "center",
  },
});
export default SignUp;
