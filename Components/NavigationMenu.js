import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../Page/Welcome";
import Calendar from "../Page/Calendar";
import Profile from "../Page/Profile";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { addTrainee } from "../services/data-manager";

const Tab = createBottomTabNavigator();

const NavigationMenu = () => {
  const route = useRoute();
  const [data, setData] = useState(route.params?.data ?? "default value");
  const handleNewTrainee = (userId,trainee) => {
    addTrainee(data.id, trainee);
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
          <Welcome data={data} handlenewTrainee={handleNewTrainee} />
        )}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        styles={styles.menuItem}
        name="REGISTRE"
        children={() => <Calendar data={data} />}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        styles={styles.menuItem}
        name="PERFIL"
        children={() => <Profile data={data} />}
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
