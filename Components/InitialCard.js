import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";

function InitialCard() {
  return (
    <View style={styles.initialCard}>
      <Image
        style={styles.img}
        source={require("../assets/Images/portada-app.jpg")}
      />
      <View style={styles.containerBtns}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>REGISTRA'T</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>INICIA SESSIÓ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 18,
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#DBE9EC",
    padding: 2,
    width: 180,
    borderColor: "#000000",
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default InitialCard;
