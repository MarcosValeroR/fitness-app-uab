import { SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./Navigation";
import { clearData } from "./services/local-storage";

export default function App() {
  clearData();
  return <Navigation />;
}
