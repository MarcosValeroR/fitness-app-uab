import { Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../Components/Header";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"PERFIL"} isNavigationIcon={false} />
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDC6D0",
    paddingTop: StatusBar.currentHeight,
  },
});
