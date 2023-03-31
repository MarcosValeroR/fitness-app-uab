import InitialCard from "./Components/InitialCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "./Components/LoginForm";
import SignInForm from "./Components/SignInForm";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="InitialScreen" component={InitialCard} />
        
        <Stack.Screen name="SignInScreen" component={SignInForm} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
