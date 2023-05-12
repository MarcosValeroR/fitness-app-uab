import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Header from "../Components/Header";
import GenderPicker from "../Components/GenderPicker";
import Input from "../Components/Input";
import BornDate from "../Components/BornDate";
import SubmitButton from "../Components/SubmitButton";
import {
  loadLocalData,
  getUsers,
  storeUsers,
  addUser,
} from "../services/data-manager";
import Globals from "../services/globals";

const windowWidth = Dimensions.get("window").width;

function SignUp() {
  const date = new Date();
  //Dades del usuari
  const [gender, setGender] = useState("");
  const [userName, setUserName] = useState("");
  const [birthdayDate, setBirthdayDate] = useState(date);
  const [userMail, setUserMail] = useState("");
  const [userPasswd, setUserPasswd] = useState("");

  useEffect(() => {
    async function loadData() {
      await loadLocalData();
    }
    loadData();
  }, []);

  const handleChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || birthdayDate;
    setBirthdayDate(currentDate);
  };

  const handleGenderPicker = (value) => {
    setGender(value);
  };
  const handleChangeName = (value) => {
    setUserName(value);
  };
  const handleChangeMail = (value) => {
    setUserMail(value);
  };
  const handleChangePasswd = (value) => {
    setUserPasswd(value);
  };
  const handleSubmit = () => {
    if (
      gender !== "Sense especificar" &&
      userName !== "" &&
      birthdayDate !== date &&
      userMail !== "" &&
      userPasswd !== ""
    ) {
      formattedDate = `${birthdayDate.getDate()}/${
        birthdayDate.getMonth() + 1
      }/${birthdayDate.getFullYear()}`;
      const newUser = {
        name: userName,
        mail: userMail,
        passwd: userPasswd,
        date: formattedDate,
        gender: gender,
      };
      addUser(newUser);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"REGISTRE NOU USUARI"} />
      <View style={styles.bodyScreen}>
        <View style={styles.form}>
          <GenderPicker
            gender={gender}
            handleGenderPicker={handleGenderPicker}
            inputStyle={styles.input}
            textStyle={styles.txt}
            inputPickerStyle={styles.inptPicker}
          />
          <Input
            containerStyle={styles.input}
            textStyle={styles.txt}
            labelText={"Nom"}
            inputStyle={styles.inpt}
            initialValue={userName}
            handleChange={handleChangeName}
          />
          <BornDate
            containerStyle={styles.input}
            textStyle={styles.txt}
            inputStyle={styles.inpt}
            initialValue={birthdayDate}
            handleChangeDate={handleChangeDate}
          />
          <Input
            containerStyle={styles.input}
            textStyle={styles.txt}
            labelText={"Correu electrònic"}
            inputStyle={styles.inpt}
            initialValue={userMail}
            handleChange={handleChangeMail}
          />
          <Input
            containerStyle={styles.input}
            textStyle={styles.txt}
            labelText={"Contrassenya"}
            inputStyle={styles.inpt}
            initialValue={userPasswd}
            handleChange={handleChangePasswd}
            secure={true}
          />

          <SubmitButton
            text={"SEGÜENT"}
            handleSubmit={handleSubmit}
            screenToNavigate={"InitialScreen"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#FFFFFF",
    padding: 2,
    width: 200,
    height: 50,
    alignSelf: "center",
    marginTop: 40,
    borderColor: "#000000",
    borderWidth: 3,
  },

  txtBtn: {
    fontWeight: "900",
    fontSize: 18,
    alignSelf: "center",
    paddingTop: 8,
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
    backgroundColor: "#FFFFFF",
    width: windowWidth - 30,
    borderColor: "black",
    borderWidth: 1,
  },

  inpt: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: windowWidth - 30,
    height: 50,
    color: "black",
    borderColor: "black",
    borderWidth: 2,
    shadowOffset: { width: 0, height: -3 },
    shadowColor: "black",
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
