import {
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from "../Components/Header";
import React, { useState } from "react";
import Trainee from "../Components/Trainee";

const Register = () => {
  const [trainees, setTrainees] = useState([
    {
      time: "00:12",
      distance: 0.03,
      speed: 3.2,
      date: new Date(1995, 11, 17),
    },
    {
      time: "00:12",
      distance: 0.03,
      speed: 3.2,
      date: new Date(1995, 11, 17),
    },
    {
      time: "00:12",
      distance: 0.03,
      speed: 3.2,
      date: new Date(1995, 11, 17),
    },
    {
      time: "00:12",
      distance: 0.03,
      speed: 3.2,
      date: new Date(1995, 11, 17),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"REGISTRE"} isNavigationIcon={false} />
      <View style={styles.traineesContainer}>
        <ScrollView>
          <Trainee />
          <Trainee />
          <Trainee />
          <Trainee />
          <Trainee />
          <Trainee />
          <Trainee />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDC6D0",
    paddingTop: StatusBar.currentHeight,
  },
  traineesContainer: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    marginBottom: 60,
  },
});
