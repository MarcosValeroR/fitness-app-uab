import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { NavigationIcon } from "../Components/NavigationIcon";

const windowWidth = Dimensions.get("window").width;

function SignUp() {
  //Gènere
  const [gender, setGender] = useState("");

  const genderOptions = [
    { label: "Sense especificar", value: "no_specify"},
    { label: "Masculí", value: "masculi" },
    { label: "Femení", value: "femeni" },
    { label: "No binari", value: "no_binari" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerScreen}>
        <NavigationIcon
          stylesIcon={styles.arrowLeft}
          screenToNavigate={"InitialScreen"}
          size={35}
          iconName={"arrowleft"}
        />
        <Text style={styles.txtTitle}>REGISTRE NOU USUARI</Text>
      </View>
      <View style={styles.bodyScreen}>
        <View style={styles.form}>
          <Text style={styles.txt}>Gènere</Text>
          <Picker style={styles.inptPicker}
            selectedValue={gender}
            height={100}
            onValueChange={(value) => setGender(value)}
          >
            {genderOptions.map((option, index) => (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>

          <View style={styles.inptContainer}>
            <Text style={styles.txt}>Nom</Text>
            <TextInput style={styles.inpt} />
          </View>
          <View style={styles.inptContainer}>
            <Text style={styles.txt}>Any de naixement</Text>
            <TextInput style={styles.inpt} />
          </View>
          <View style={styles.inptContainer}>
            <Text style={styles.txt}>Edat</Text>
            <TextInput style={styles.inpt} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20,
    backgroundColor: "white",
    width: windowWidth - 30,
  }, 

  inpt: {
    marginBottom: 20,
    backgroundColor: "white",
    width: windowWidth - 30,
    height: 50,
  },
  txt: {
    marginBottom: 5,
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
