import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../Page/Welcome";
import Calendar from "../Page/Calendar";
import Profile from "../Page/Profile";
import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const NavigationMenu = () => {
  const route = useRoute();
  const [data, setData] = useState(route.params?.data ?? "default value");

  return (
    <Tab.Navigator styles={styles.menu}>
      <Tab.Screen
        styles={styles.menuItem}
        name="INICI"
        children={() => <Welcome data={data} />}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        styles={styles.menuItem}
        name="CALENDARI"
        component={Calendar}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        styles={styles.menuItem}
        name="PERFIL"
        component={Profile}
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
