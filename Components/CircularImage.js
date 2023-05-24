import React from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const CircularImage = ({ imagePath, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.circle}>
        {imagePath === null ? (
          <ImageBackground style={styles.img}>
            <Text>Afegeix una imatge</Text>
          </ImageBackground>
        ) : (
          <Image source={{uri: imagePath}} style={styles.img} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderWidth: 1,
    marginTop: 20,
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#ccc",
  },
  img: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    borderRadius: 75,
    height: "100%",
  },
});
export default CircularImage;
