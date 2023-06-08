import {
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Header from "../Components/Header";
import React from "react";
import Trainee from "../Components/Trainee";

const Register = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"REGISTRE"} isNavigationIcon={false} />
      <View style={styles.traineesContainer}>
        <ScrollView>
          {data.trainees.map((trainee, index) => {
            return <Trainee key={index} trainee={trainee} />;
          })}
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
