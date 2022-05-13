import React from "react";
import { StyleSheet, View, Button } from "react-native";

const onClick = () => {
  alert("hey");
};

const ButtonCustom = ({ text }) => {
  return <Button color="black" title={text} onPress={onClick} />;
};

export default ButtonCustom;
