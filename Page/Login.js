import {useState} from "react";
import {  StatusBar, StyleSheet, SafeAreaView } from "react-native";
import Header from "../Components/Header";
import LoginContainer from "../Components/LoginContainer";
import { useNavigation } from "@react-navigation/native";
import { getDataDB } from "../services/getDataDB";

function Login() {

  const [userMail, setUserMail] = useState("")
  const [userPasswd, setUserPasswd] = useState("")

  const handleChangeMail = (value) => {
    setUserMail(value)
  }
  const handleChangePasswd = (value) => {
    setUserPasswd(value)
    
  }
  const handleSubmit = () => {
    if (userMail !== "" && userPasswd !== ""){
      getDataDB("@USER_EXAMPLE").then((data) => console.log(data))
    } else {
      console.log("Rellena todos los campos para acceder a tu usuario!")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"INICI DE SESSIÓ"}/>
      <LoginContainer userMail={userMail} userPasswd={userPasswd} handleChangeMail={handleChangeMail} handleChangePasswd={handleChangePasswd} handleSubmit={handleSubmit}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3B6C6",
    paddingTop: StatusBar.currentHeight,
  },
});
export default Login;
