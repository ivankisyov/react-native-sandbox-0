import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Ivan";

  return (
    <View>
      <Text style={styles.heading}>Getting started with react native</Text>
      <Text style={styles.subheading}>Hi there, my name is {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45,
  },
  subheading: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
