import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const greeting2 = "Hi there!";
  const greeting3 = <Text style={styles.text}>{greeting2}</Text>;

  return (
    <View>
      <Text style={styles.text}>HomeScreen 1</Text>
      <Text style={styles.text}>{greeting2}</Text>
      {greeting3}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
