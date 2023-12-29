import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

const TextScreen = () => {
  const [currentName, setCurrentName] = useState("");

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={currentName}
        onChangeText={(newValue) => setCurrentName(newValue)}
      />
      <Text>Your name is: {currentName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
