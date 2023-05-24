import { Text, StyleSheet, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Distance from "./Distance";
import Speed from "./Speed";

const TraineeComponent = ({ displayTime }) => {
  return (
    <>
      <View style={styles.container}>
        <Counter displayTime={displayTime} />
        <View style={styles.separator} />
        <Distance />
        <View style={styles.separator} />
        <Speed />
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
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default TraineeComponent;
