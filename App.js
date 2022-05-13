import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BatteryLevel from "./src/Brightness";
import ButtonVibration from "./src/ButtonVibration";

export default function App() {
  const onClick = () => {
    console.log("Une patate");
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <ButtonVibration text="Hey" />
      <StatusBar style="auto" />
      <BatteryLevel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
