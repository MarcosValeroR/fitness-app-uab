import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { NavigationButton } from "../Components/NavigationButton";

function InitialCard() {
  return (
    <View style={styles.container}>
      <View style={styles.initialCard}>
        <Image
          style={styles.img}
          source={require("../assets/Images/portada-app.jpg")}
        />
        <View style={styles.containerBtns}>
          <NavigationButton stylesBtn={styles.btn} screenToNavigate="SignupScreen" text="REGISTRA'T"styleText={styles.txtBtn} />
          <NavigationButton stylesBtn={styles.btn} screenToNavigate="LoginScreen" text="INICIA SESSIÓ"styleText={styles.txtBtn} />
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
