import {
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import Trainee from "../Components/Trainee";

const Register = ({ data }) => {
  const [trainees, setTrainees] = useState(data.trainees);
  useEffect(() => {
    
      console.log("Entrenamientos", trainees);
      const { routeCoordinates, speed } = trainees[0];
      console.log("Parseado", JSON.parse(routeCoordinates));
    
  }, [trainees]);
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
