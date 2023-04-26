import React from 'react'
import {
    Text,
    View,
    StyleSheet
  } from "react-native";
import { NavigationIcon } from "../Components/NavigationIcon";


function Header({headerTitle}) {
  return (
    <View style={styles.headerScreen}>
        <NavigationIcon
          stylesIcon={styles.arrowLeft}
          screenToNavigate={"InitialScreen"}
          size={35}
          iconName={"arrowleft"}
        />
        <Text style={styles.txtTitle}>{headerTitle}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    headerScreen: {
        flex: 0.8,
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
})
export default Header