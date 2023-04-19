import InitialCard from "./Page/InitialCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Page/Signup";
import Login from "./Page/Login";

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignupScreen" component={SignUp} />
        <Stack.Screen name="InitialScreen" component={InitialCard} />
        
        <Stack.Screen name="LoginScreen" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
