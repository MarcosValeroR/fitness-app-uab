import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function InitialCard() {

  const navigation = useNavigation(); 


  return (
    <View style={styles.container}>
      <View style={styles.initialCard}>
        <Image
          style={styles.img}
          source={require("../assets/Images/portada-app.jpg")}
        />
        <View style={styles.containerBtns}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={styles.txtBtn}>REGISTRA'T</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.txtBtn}>INICIA SESSIÓ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3B6C6",
    alignItems: "center",
    justifyContent: "center",
  },
  initialCard: {
    alignItems: "center",
  },
  img: {
    flex: 10,
    width: 500,
  },

  containerBtns: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },

  txtBtn: {
    fontWeight: "900",
    fontSize: 14,
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#DBE9EC",
    padding: 2,
    width: 140,
    borderColor: "#000000",
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default InitialCard;
