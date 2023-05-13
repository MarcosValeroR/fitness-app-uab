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
import { useRoute } from "@react-navigation/native";
import Header from "../Components/Header";

const windowWidth = Dimensions.get("window").width;

function Welcome() {
  const route = useRoute();

  const [location, setLocation] = useState(null);
  const [data, setData] = useState(route.params?.data ?? "default value");
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
          <Header headerTitle={`BENVINGUT ${data.name.toUpperCase()}!`} />
        ) : gender === "femeni" ? (
          <Header headerTitle={`BENVINGUDA ${data.name.toUpperCase()}!`} />
        ) : (
          <Header headerTitle={`BENVINGUDE ${data.name.toUpperCase()}!`} />
        )}
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {welcomeMessage()}
      <View
        style={{ height: 500, width: windowWidth}}
      >
        <View style={styles.containerMap}>
          {location && (
            <MapView
              style={styles.map}
              region={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.003,
                longitudeDelta: 0.005,
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
});

export default Welcome;
