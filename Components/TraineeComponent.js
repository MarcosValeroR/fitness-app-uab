import { Text, StyleSheet, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Speed from "./Speed";
import Distance from "./Distance";

const TraineeComponent = ({ displayTime, distance, speed }) => {
  return (
    <>
      <View style={styles.container}>
        <Counter displayTime={displayTime} />
        <View style={styles.separator} />
        <Distance distance={distance} />
        <View style={styles.separator} />
        <Speed speed={speed} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderColor: "gray",
    borderWidth: 1,
  },
  container: {
    alignSelf: "center",
    marginTop: 25,
    height: 80,
    width: "90%",
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default TraineeComponent;
