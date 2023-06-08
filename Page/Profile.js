import { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Input from "../Components/Input";
import Header from "../Components/Header";
import CircularImage from "../Components/CircularImage";
import * as ImagePicker from "expo-image-picker";
import { addImgUser } from "../services/data-manager";

const windowWidth = Dimensions.get("window").width;
const Profile = ({ data, handleEdit }) => {
  const calculateAge = (date) => {
    const dateArray = date.split("/");
    const birthdayDate = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
    const ageDifference = new Date().getTime() - birthdayDate.getTime();
    return Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365.25));
  };
  //Estados del perfil
  const [profileImage, setProfileImage] = useState(data.profileImage);
  const [mail, setMail] = useState(data.mail);
  const [passwd, setPasswd] = useState(data.passwd);
  const [userName, setUserName] = useState(data.name);
  const [weight, setWeight] = useState(data.weight);
  const [height, setHeight] = useState(data.height);
  const [imc, setImc] = useState(data.imc);
  const [age, setAge] = useState(calculateAge(data.date));

  useEffect(() => {
    addImgUser(data.id, profileImage);
  }, [profileImage]);
  const handleClick = async () => {
    permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      //L'usuari no li ha dat permis a les fotos
      alert("Permission is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }

    setProfileImage(pickerResult.assets[0].uri);
  };
  useEffect(() => {
    calculateImc();
  }, [weight, height]);
  const calculateImc = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const imcValue = weightInKg / (heightInM * heightInM);
    setImc(imcValue.toFixed(2));
  };
  const handleChangeMail = (value) => {
    setMail(value);
  };
  const handleChangePasswd = (value) => {
    setPasswd(value);
  };
  const handleChangeUserName = (value) => {
    setUserName(value);
  };
  const handleChangeHeight = (value) => {
    setHeight(value);
  };
  const handleChangeWeight = (value) => {
    setWeight(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"PERFIL"} isNavigationIcon={false} />
      <CircularImage imagePath={profileImage} handlePress={handleClick} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: 30,
        }}
      >
        <Input
          containerStyle={styles.input}
          textStyle={styles.txt}
          labelText={"Correu electrònic"}
          inputStyle={styles.inpt}
          initialValue={mail}
          handleChange={handleChangeMail}
        />
        <Input
          containerStyle={styles.input}
          textStyle={styles.txt}
          labelText={"Contrassenya"}
          inputStyle={styles.inpt}
          initialValue={passwd}
          handleChange={handleChangePasswd}
          secure
        />
        <Input
          containerStyle={styles.input}
          textStyle={styles.txt}
          labelText={"Nom"}
          inputStyle={styles.inpt}
          initialValue={userName}
          handleChange={handleChangeUserName}
        />
        <Input
          containerStyle={styles.input}
          textStyle={styles.txt}
          labelText={"Edat"}
          inputStyle={styles.inptDisabled}
          initialValue={age.toString()}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
            width: windowWidth - 30,
            justifyContent: "space-evenly",
          }}
        >
          <Input
            containerStyle={styles.input}
            textStyle={styles.txt}
            labelText={"Pes"}
            inputStyle={styles.inptRow}
            initialValue={weight}
            handleChange={handleChangeWeight}
            keyboardType={"numeric"}
          />
          <Input
            containerStyle={styles.input}
            textStyle={styles.txt}
            labelText={"Altura"}
            inputStyle={styles.inptRow}
            initialValue={height}
            handleChange={handleChangeHeight}
            keyboardType={"numeric"}
          />
          <Input
            containerStyle={styles.input}
            textStyle={styles.txt}
            labelText={"IMC"}
            inputStyle={styles.inptRowDisabled}
            initialValue={imc}
          />
        </View>
        <TouchableOpacity
          onPress={() => handleEdit({ mail, passwd, userName, weight, height })}
        >
          <View style={styles.btnStart}>
            <Text style={styles.txtBtns}>Guarda canvis</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDC6D0",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    marginBottom: 10,
  },
  txt: {
    margin: 2,
    fontSize: 14,
    fontWeight: "bold",
  },
  inpt: {
    paddingLeft: 10,
    backgroundColor: "#FFFFFF",
    width: windowWidth - 30,
    height: 30,
    color: "black",
    borderColor: "black",
    borderWidth: 2,
    shadowOffset: { width: 0, height: -3 },
    shadowColor: "black",
  },
  inptDisabled: {
    paddingLeft: 10,
    backgroundColor: "#B9B9B9",
    width: windowWidth - 30,
    height: 30,
    color: "black",
    borderColor: "black",
    borderWidth: 2,
    shadowOffset: { width: 0, height: -3 },
    shadowColor: "black",
  },
  inptRow: {
    paddingLeft: 10,
    backgroundColor: "#FFFFFF",
    width: 80,
    height: 30,
    color: "black",
    borderColor: "black",
    borderWidth: 2,
    shadowOffset: { width: 0, height: -3 },
    shadowColor: "black",
  },
  inptRowDisabled: {
    paddingLeft: 10,
    backgroundColor: "#B9B9B9",
    width: 80,
    height: 30,
    color: "black",
    borderColor: "black",
    borderWidth: 2,
    shadowOffset: { width: 0, height: -3 },
    shadowColor: "black",
  },
  btnStart: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    width: 160,
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    alignContent: "center",
  },
  txtBtns: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
