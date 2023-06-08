import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Trainee({ trainee }) {
  const { startTime } = trainee;
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
  return (
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
  );
}

const styles = StyleSheet.create({
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
