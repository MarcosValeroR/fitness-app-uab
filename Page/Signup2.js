import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Header from "../Components/Header";
import Input from "../Components/Input";
import SubmitButton from "../Components/SubmitButton";
import { addUser, getUsers, searchUser } from "../services/data-manager";

const windowWidth = Dimensions.get("window").width;

function Signup2() {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState(route.params?.data ?? "default value");
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [imc, setImc] = useState(null);

  const handleChangeWeight = (value) => {
    setWeight(value);
  };
  const handleChangeHeight = (value) => {
    setHeight(value);
  };
  const calculateImc = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const imcValue = weightInKg / (heightInM * heightInM);
    setImc(imcValue.toFixed(2));
  };

  const handleSubmit = () => {
    if (weight !== null && height !== null) {
      const newUser = {
        ...data,
        weight: weight,
        height: height,
        imc: imc,
        profileImage: null,
        trainees: [],
      };
      const userExist = searchUser(newUser.mail, newUser.passwd);
      if (userExist !== "User not found") {
        console.log("El usuari ja existeix");
        navigation.navigate("SignupScreen");
      } else {
        addUser(newUser);
        navigation.navigate("NavigationMenuScreen", { data: newUser });
      }
    }
  };
  useEffect(() => {
    if (weight && height) {
      calculateImc();
    }
  }, [weight, height]);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle={"REGISTRE NOU USUARI"}
        screenToNavigate={"SignupScreen"}
      />
      <View style={styles.bodyScreen}>
        <View style={styles.form}>
          <Input
            containerStyle={styles.input}
            textStyle={styles.txt}
            labelText={"Pes (Kg)"}
            inputStyle={styles.inpt}
            initialValue={weight}
            handleChange={handleChangeWeight}
            keyboardType={"numeric"}
          />
          <Input
            containerStyle={styles.input}
            textStyle={styles.txt}
            labelText={"Altura (cm)"}
            inputStyle={styles.inpt}
            initialValue={height}
            handleChange={handleChangeHeight}
            keyboardType={"numeric"}
          />
          <Input
            containerStyle={styles.input}
            textStyle={styles.txt}
            labelText={"Index de massa corporal (IMC)"}
            inputStyle={styles.inpt}
            initialValue={imc}
          />
          <SubmitButton text={"FINALITZA"} handleSubmit={handleSubmit} />
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
    backgroundColor: "#BDC6D0",
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
export default Signup2;
