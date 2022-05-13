import React from "react";
import * as Battery from 'expo-battery';
import { StyleSheet, View, Button } from "react-native";


const onClick = () => {
  alert("hey");
};

const BatteryLevel = () => {
    const myBatteryLevel = await Battery.getBatteryStateAsync();

    return (
        <Text> {myBatteryLevel} </Text>
    );
};

export default BatteryLevel;
