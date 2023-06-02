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
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import haversine from "haversine";
import Header from "../Components/Header";
import TraineeComponent from "../Components/TraineeComponent";
0;
const windowWidth = Dimensions.get("window").width;
const LONGITUDEDELTA = 0.0113;
const LATITUDEDELTA = 0.0112;
const LONGITUDE = -122.4324;
const LATITUDE = 37.78825;

function Welcome({ data }) {
  //Estados Map

  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [latitude, setLatitude] = useState(LATITUDE);
  const [longitude, setLongitude] = useState(LONGITUDE);

  //Distancia
  const [distance, setDistance] = useState(0);

  //Velocitat
  const [speed, setSpeed] = useState(0);
  const [startTime, setStartTime] = useState(null);

  //Estados Counter
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  //Estados entrenamiento
  const [startTrainee, setStartTrainee] = useState(false);

  //UseEffects
  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((m) => m + 1);
    }
  }, [seconds]);

  useEffect(() => {
    // console.log(routeCoordinates[routeCoordinates.length - 1]);
    if (routeCoordinates.length === 0) {
    } else if (routeCoordinates.length === 1) {
      setDistance(
        (distance) =>
          distance +
          calcdistance(
            routeCoordinates[routeCoordinates.length - 1],
            routeCoordinates[routeCoordinates.length - 1]
          )
      );
    } else {
      setDistance(
        (distance) =>
          distance +
          calcdistance(
            routeCoordinates[routeCoordinates.length - 2],
            routeCoordinates[routeCoordinates.length - 1]
          )
      );
    }
  }, [routeCoordinates]);

  useEffect(() => {
    const timeElapsed = Date.now() - startTime;
    setSpeed((distance * 1000) / (timeElapsed / 1000));
  }, [distance]);

  useEffect(() => {
    const startTracking = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permisos para acceder a la ubicación denegados");
        return;
      }
      try {
        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          (position) => {
            const { latitude, longitude } = position.coords;
            const newCoordinate = {
              latitude,
              longitude,
            };

            setLatitude(latitude);
            setLongitude(longitude);
            setRouteCoordinates((array) => array.concat(newCoordinate));
          }
        );
      } catch (err) {
        console.log("Algo salió mal....");
      }
    };
    startTracking();
  }, []);

  useEffect(() => {
    setSeconds(0);
    setMinutes(0);
    setDistance(0);
    setSpeed(0);
    setRouteCoordinates([]);
  }, [startTrainee]);
  const start = () => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    setStartTrainee(true);
    setStartTime(Date.now());
    setIntervalId(id);
  };
  const stop = () => {
    clearInterval(intervalId);

    //Despues de guardar los datos
    setIntervalId(null);
    setStartTrainee(false);
  };
  const formatTime = (time) => time.toString().padStart(2, "0");
  const displayTime = `${formatTime(minutes)}:${formatTime(seconds)}`;

  const { gender } = data;

  const calcdistance = (previousLatlng, newLatLng) => {
    return haversine(previousLatlng, newLatLng) || 0;
  };
  const getMapRegion = () => ({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDEDELTA,
    longitudeDelta: LONGITUDEDELTA,
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
          <MapView
            style={styles.map}
            region={getMapRegion()}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            followsUserLocation
            loadingEnabled
          >
            {startTrainee && (
              <Polyline
                coordinates={routeCoordinates}
                strokeWidth={2}
                strokeColor="red"
              />
            )}
          </MapView>
        </View>
      </View>
      <View style={styles.containerBtns}>
        {!startTrainee ? (
          <TouchableOpacity onPress={start}>
            <View style={styles.btnStart}>
              <Text style={styles.txtBtns}>INICIAR ENTRENAMENT</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={stop}>
            <View style={styles.btnFinish}>
              <Text style={styles.txtBtns}>FINALITZAR</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      {startTrainee && (
        <TraineeComponent
          displayTime={displayTime}
          distance={distance}
          speed={speed}
        />
      )}
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
