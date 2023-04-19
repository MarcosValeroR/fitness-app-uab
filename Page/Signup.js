import React from "react";
import { useFonts } from "expo-font";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerScreen}>
        <TouchableOpacity onPress={() => navigation.navigate("InitialScreen")}>
          <Icon name="arrowleft" size={35} style={styles.arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.txtTitle}>BENVINGUT NOU USUARI!</Text>
      </View>
      <View style={styles.bodyScreen}>
        <Text>Formulario de registro</Text>
        <View style={styles.form}>
          <View style={styles.inptContainer}>
            <Text style={styles.txt}>Gènere</Text>
            <TextInput style={styles.inpt} />
          </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#A3B6C6",
  },
  headerScreen: {
    flex: 1,
    padding: 2,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "#A3B6C6",
  },

  arrowLeft: {
    marginTop: 15,
  },

  inpt: {
    backgroundColor: "white",
    width: 300,
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  txtTitle: {
    fontSize: 16,
    marginTop: 15,
    marginLeft: 10,
    fontWeight: "500",


  },

  bodyScreen: {
    flex: 10,
    justifyContent: "center",
    alignContent: "center",
  },
});
export default SignUp;
