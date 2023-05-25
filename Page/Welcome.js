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
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import * as Location from "expo-location";
import haversine from "haversine";
import Header from "../Components/Header";
import TraineeComponent from "../Components/TraineeComponent";
import { getDistance } from "geolib";

const windowWidth = Dimensions.get("window").width;
const LONGITUDEDELTA = 0.003;
const LATITUDEDELTA = 0.002;
const LONGITUDE = -122.4324;
const LATITUDE = 37.78825;

function Welcome({ data }) {
  //Estados Map
  const [location, setLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [latitude, setLatitude] = useState(LATITUDE);
  const [longitude, setLongitude] = useState(LONGITUDE);
  const [distance, setDistance] = useState(0);
  const [prevLatLng, setPrevLatLng] = useState({});
  const [coordinate, setCoordinate] = useState(
    new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDEDELTA,
      longitudeDelta: LONGITUDEDELTA,
    })
  );
  const [marker, setMarker] = useState(null);

  //Estados Counter
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  //Estados entrenamiento
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
    const startTracking = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permisos para acceder a la ubicación denegados");
        return;
      }
      try {
        const id = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.Lowest,
            timeInterval: 5000,
            distanceInterval: 10,
          },
          (position) => {
            const { latitude, longitude } = position.coords;
            const newCoordinate = {
              latitude,
              longitude,
            };
            if (marker !== null) {
              marker.animateMarkerToCoordinate(newCoordinate, 500);
            }
            setLatitude(latitude);
            setLongitude(longitude);
            setRouteCoordinates([...routeCoordinates, newCoordinate]);
            setDistance((distance) => distance + calcdistance(newCoordinate));
            setPrevLatLng(newCoordinate);
          }
        );
      } catch (err) {
        console.log("Algo salió mal....");
      }
    };
    startTracking();
  }, [latitude, longitude]);

  const calcdistance = (newLatLng) => {
    //OPTAR POR CALCULAR EN REGISTRO CON UN INITIAL POINT Y UN FINAL POINT
    if (Object.keys(prevLatLng).length === 0) {
      return 0;
    }
    var pdis = getDistance(
      { latitude: prevLatLng.latitude, longitude: prevLatLng.longitude },
      { latitude: newLatLng.latitude, longitude: newLatLng.longitude }
    );
    return pdis / 1000;
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
            {startTrainee && routeCoordinates.length > 0 && (
              <Polyline
                coordinates={routeCoordinates}
                strokeWidth={2}
                strokeColor="red"
              />
            )}
            <Marker.Animated
              ref={(marker) => {
                setMarker(marker);
              }}
              coordinate={coordinate}
            />
          </MapView>
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
      {startTrainee && (
        <TraineeComponent displayTime={displayTime} distance={distance} />
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
