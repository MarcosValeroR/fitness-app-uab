import { useState, useEffect } from "react";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import Header from "../Components/Header";
import LoginContainer from "../Components/LoginContainer";
import Globals from "../services/globals";
import { useNavigation } from "@react-navigation/native";
import { searchUser, loadLocalData } from "../services/data-manager";

function Login() {
  const navigation = useNavigation();
  const [userMail, setUserMail] = useState("");
  const [userPasswd, setUserPasswd] = useState("");

  useEffect(() => {
    async function loadData() {
      await loadLocalData();
    }
    loadData();
  }, []);

  const handleChangeMail = (value) => {
    setUserMail(value);
  };
  const handleChangePasswd = (value) => {
    setUserPasswd(value);
  };
  const handleSubmit = () => {
    if (userMail !== "" && userPasswd !== "") {
      const userFound = searchUser(userMail, userPasswd);
      if (userFound !== "User not found") {
        navigation.navigate("NavigationMenuScreen", { data: userFound });
      } else {
        navigation.navigate("LoginScreen");
      }
    } else {
      console.log("Rellena todos los campos para acceder a tu usuario!");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"INICI DE SESSIÓ"} />
      <LoginContainer
        userMail={userMail}
        userPasswd={userPasswd}
        handleChangeMail={handleChangeMail}
        handleChangePasswd={handleChangePasswd}
        handleSubmit={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDC6D0",
    paddingTop: StatusBar.currentHeight,
  },
});
export default Login;
