import { useState, useEffect } from "react";
import { Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../Components/Header";
import CircularImage from "../Components/CircularImage";
import * as ImagePicker from "expo-image-picker";
import { addImgUser } from "../services/data-manager";

const Profile = ({ data }) => {
  const [profileImage, setProfileImage] = useState(data.profileImage);

  useEffect(() => {
    addImgUser(data.id, profileImage);
  }, [profileImage]);
  const handleClick = async () => {
    permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      //L'usuari no li ha dat permis a les fotos
      alert("Permission is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }

    setProfileImage(pickerResult.assets[0].uri);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"PERFIL"} isNavigationIcon={false} />
      <CircularImage imagePath={profileImage} handlePress={handleClick} />
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
