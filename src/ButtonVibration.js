import React from "react";
import { Vibration, Button } from "react-native";

const onClick = () => {
  alert("hey");
};

const ButtonVibration = ({ text }) => {
  return (
    <Button
      onPress={() => Vibration.vibrate(10 * 10)}
      color="black"
      title={text}
    />
  );
};

export default ButtonVibration;
