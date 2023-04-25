import { SafeAreaView, StyleSheet } from "react-native"
import Navigation from "./Navigation"
import { StatusBar } from "expo-status-bar"

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
})
