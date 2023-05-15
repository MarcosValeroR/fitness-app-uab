import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationIcon } from "../Components/NavigationIcon";

function Header({ headerTitle, screenToNavigate = "InitialScreen" , isNavigationIcon = true}) {
  return (
    <View style={styles.headerScreen}>
      {isNavigationIcon && <NavigationIcon
        stylesIcon={styles.arrowLeft}
        screenToNavigate={screenToNavigate}
        size={35}
        iconName={"arrowleft"}
      />}
      {!isNavigationIcon && <View style={{marginLeft: 35}}></View>}
      <Text style={styles.txtTitle}>{headerTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerScreen: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 4,
    alignItems: "center",
  },

  arrowLeft: {
    marginLeft: 5,
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
});
export default Header;
