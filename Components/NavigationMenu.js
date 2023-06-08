import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../Page/Welcome";
import Register from "../Page/Register";
import Profile from "../Page/Profile";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { editUser, addTrainee, loadLocalData } from "../services/data-manager";

const Tab = createBottomTabNavigator();

const NavigationMenu = () => {
  const route = useRoute();
  const [data, setData] = useState(route.params?.data ?? "default value");


  
  const handleEdit = (dataEdited) => {
    setData({
      ...data,
      name: dataEdited.userName,
      mail: dataEdited.mail,
      passwd: dataEdited.passwd,
      height: dataEdited.height,
      weight: dataEdited.weight,
    });
    editUser(data.id, dataEdited);
  };

  const handleTrainees = (trainee) => {
    //Stringify para poder guardarlo en el array de datos, sino se guarda con valor [Array], para recuperar los datos a su estado original hacer parse cuando se vayan a usar
    const traineeCopy = {
      ...trainee,
      routeCoordinates: JSON.stringify(trainee.routeCoordinates),
      speed: JSON.stringify(trainee.speed),
    };
    setData({ ...data, trainees: [...data.trainees, traineeCopy] });
    addTrainee(data.id, traineeCopy);
  };
  return (
    <Tab.Navigator
      styles={styles.menu}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "INICI") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "REGISTRE") {
            iconName = focused ? "barbell" : "barbell-outline";
          } else if (route.name === "PERFIL") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        styles={styles.menuItem}
        name="INICI"
        children={() => (
          <Welcome data={data} handleNewTrainee={handleTrainees} />
        )}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        styles={styles.menuItem}
        name="REGISTRE"
        children={() => <Register data={data} />}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        styles={styles.menuItem}
        name="PERFIL"
        children={() => <Profile data={data} handleEdit={handleEdit} />}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default NavigationMenu;

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#898F96",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  menuItem: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 10,
  },
});
