import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

const TextScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");

  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={currentPassword}
        onChangeText={(newValue) => setCurrentPassword(newValue)}
      />
      {currentPassword.length > 0 && currentPassword.length < 5 ? (
        <Text>Password's length must be at least 5 characters long</Text>
      ) : null}
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
