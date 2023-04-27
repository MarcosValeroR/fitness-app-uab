import {useState} from "react";
import {  StatusBar, StyleSheet, SafeAreaView } from "react-native";
import Header from "../Components/Header";
import LoginContainer from "../Components/LoginContainer";

function Login() {

  const [userMail, setUserMail] = useState("")
  const [userPasswd, setUserPasswd] = useState("")

  const handleChangeMail = (value) => {
    setUserMail(value)
  }
  const handleChangePasswd = (value) => {
    setUserPasswd(value)
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"INICI DE SESSIÓ"}/>
      <LoginContainer userMail={userMail} userPasswd={userPasswd} handleChangeMail={handleChangeMail} handleChangePasswd={handleChangePasswd}/>
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
