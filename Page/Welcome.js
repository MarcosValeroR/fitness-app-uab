import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import Header from "../Components/Header";
import TraineeComponent from "../Components/TraineeComponent";

const windowWidth = Dimensions.get("window").width;
function Welcome({ data }) {
  const [location, setLocation] = useState(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [startTrainee, setStartTrainee] = useState(false);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((m) => m + 1);
    }
  }, [seconds]);

  const start = () => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    setStartTrainee(true);
    setIntervalId(id);
  };

  const stop = () => {
    clearInterval(intervalId);

    //Despues de guardar los datos
    setSeconds(0);
    setMinutes(0);
    setStartTrainee(false);
    setIntervalId(null);
  };

  const formatTime = (time) => time.toString().padStart(2, "0");

  const displayTime = `${formatTime(minutes)}:${formatTime(seconds)}`;
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
  });

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
      <View style={styles.containerBtns}>
        <TouchableOpacity onPress={start}>
          <View style={styles.btnStart}>
            <Text style={styles.txtBtns}>INICIAR ENTRENAMENT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={stop}>
          <View style={styles.btnFinish}>
            <Text style={styles.txtBtns}>FINALITZAR</Text>
          </View>
        </TouchableOpacity>
      </View>
      {startTrainee && <TraineeComponent displayTime={displayTime} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerBtns: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    paddingTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnStart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    width: 160,
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    alignContent: "center",
  },
  txtBtns: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  btnFinish: {
    borderColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderWidth: 1,
    height: 40,
    width: 150,
    backgroundColor: "red",
    alignItems: "center",
  },
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
  container: {
    flex: 1,
    backgroundColor: "#BDC6D0",
    paddingTop: StatusBar.currentHeight,
  },
});

export default Welcome;
