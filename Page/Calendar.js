import { Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../Components/Header";

const Calendar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"CALENDARI"} isNavigationIcon={false} />
      <Text>Calendar Screen</Text>
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDC6D0",
    paddingTop: StatusBar.currentHeight,
  },
});
