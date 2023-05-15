import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  View,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import Header from "../Components/Header";

const windowWidth = Dimensions.get("window").width;
function Welcome({ data }) {
  const [location, setLocation] = useState(null);

  const { gender } = data;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const welcomeMessage = () => {
    return (
      <>
        {gender === "masculi" ? (
          <Header
            headerTitle={`BENVINGUT ${data.name.toUpperCase()}!`}
            isNavigationIcon={false}
          />
        ) : gender === "femeni" ? (
          <Header
            headerTitle={`BENVINGUDA ${data.name.toUpperCase()}!`}
            isNavigationIcon={false}
          />
        ) : (
          <Header
            headerTitle={`BENVINGUDE ${data.name.toUpperCase()}!`}
            isNavigationIcon={false}
          />
        )}
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {welcomeMessage()}

      <View
        style={{
          height: 400,
          width: 350,
          paddingTop: 30,
          marginLeft: (windowWidth - 350) / 2,
        }}
      >
        <View style={styles.containerMap}>
          {location && (
            <MapView
              style={styles.map}
              region={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.002,
                longitudeDelta: 0.003,
              }}
              showsUserLocation={true}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMap: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
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
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  menuItem: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 10,
  },
});

export default Welcome;
