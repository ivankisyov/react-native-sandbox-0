import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const greeting2 = "Hi there!";

  return (
    <View>
      <Text style={styles.text}>HomeScreen 1</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate("ListScreen")}
      />
      <Button
        title="Go to image demo"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("ListScreen")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
