import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    borderWidth: 1,
    alignItems: "stretch",
    flexDirection: "row",
  },
  textStyle: {
    borderColor: "red",
    borderWidth: 3,
  },
});

export default BoxScreen;
