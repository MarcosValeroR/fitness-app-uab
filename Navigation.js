import InitialCard from "./Page/InitialCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Page/Signup";
import Login from "./Page/Login";
import Welcome from "./Page/Welcome";
import Signup2 from "./Page/Signup2";

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
        <Stack.Screen name="Signup2Screen" component={Signup2} />
        <Stack.Screen name="InitialScreen" component={InitialCard} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
