import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";

const windowWidth = Dimensions.get("window").width;
const LONGITUDEDELTA = 0.0113;
const LATITUDEDELTA = 0.0112;
const LONGITUDE = -122.4324;
const LATITUDE = 37.78825;

function Trainee({ trainee }) {
  const [region, setRegion] = useState(null);
  const { startTime, routeCoordinates } = trainee;
  const parsedCoordinates = JSON.parse(routeCoordinates);
  const [openModal, setOpenModal] = useState(false);
  const date = new Date(startTime);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  const calculateMediumSpeed = (speedArray) => {
    if (speedArray.length === 0) {
      return 0;
    }
    const averageVelocity =
      speedArray.reduce((total, current) => total + current) /
      speedArray.length;
    return averageVelocity.toFixed(1);
  };
  const getMapRegion = () => {
    if (parsedCoordinates.length > 0) {
      return {
        latitude: parsedCoordinates[parsedCoordinates.length - 1]["latitude"],
        longitude: parsedCoordinates[parsedCoordinates.length - 1]["longitude"],
        latitudeDelta: LATITUDEDELTA,
        longitudeDelta: LONGITUDEDELTA,
      };
    } else {
      return {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDEDELTA,
        longitudeDelta: LONGITUDEDELTA,
      };
    }
  };
  return (
    <>
      <View style={styles.modal}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setOpenModal(!openModal);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Ruta realitzada</Text>
              <View
                style={{
                  height: 400,
                  width: 350,
                  paddingBottom: 10,
                }}
              >
                <View style={styles.containerMap}>
                  {parsedCoordinates.length > 0 ? (
                    <MapView
                      style={styles.map}
                      provider={PROVIDER_GOOGLE}
                      region={getMapRegion()}
                      showsUserLocation
                      followsUserLocation
                      loadingEnabled
                    >
                      <Polyline
                        coordinates={parsedCoordinates}
                        strokeWidth={2}
                        strokeColor="red"
                      />
                    </MapView>
                  ) : (
                    <Text>No has reccoregut cap distància!</Text>
                  )}
                </View>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setOpenModal(!openModal)}
              >
                <Text style={styles.textStyle}>Tanca</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
        <View style={styles.trainee}>
          <Text style={styles.traineeInfo}>
            {formattedDate} - Barcelona, Catalunya
          </Text>
          <View style={styles.containerInfo}>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Distància</Text>
              <View style={styles.infoBlock}>
                <Text style={styles.blockInfo}>
                  {trainee.distance.toFixed(2)} Km
                </Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Velocitat</Text>
              <View style={styles.infoBlock}>
                <Text style={styles.blockInfo}>
                  {calculateMediumSpeed(JSON.parse(trainee.speed))} m/s
                </Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Temps</Text>
              <View style={styles.infoBlock}>
                <Text style={styles.blockInfo}>{trainee.displayTime}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
  },
  trainee: {
    marginVertical: 10,
    height: 110,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#D9D9D9",
  },
  traineeInfo: {
    paddingTop: 4,
    alignSelf: "center",
  },
  containerInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 65,
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  infoBlock: {
    display: "flex",
    justifyContent: "center",
    height: 35,
    width: 60,
    backgroundColor: "#1F5E98",
    alignItems: "center",
  },
  blockInfo: {
    color: "white",
    fontSize: 14,
  },
});

export default Trainee;
