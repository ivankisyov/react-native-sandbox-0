import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const greeting2 = "Hi there!";

  return (
    <View>
      <Text style={styles.text}>HomeScreen 1</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate("Components")}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate("ListScreen")}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to image demo"
        onPress={() => navigation.navigate("ImageScreen")}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to counter demo"
        onPress={() => navigation.navigate("Counter")}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to colors demo"
        onPress={() => navigation.navigate("Colors")}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to square demo"
        onPress={() => navigation.navigate("Square")}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to text demo"
        onPress={() => navigation.navigate("Text")}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to box demo"
        onPress={() => navigation.navigate("Box")}
        style={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle: {
    display: "block",
    marginVertical: 10,
    padding: 20,
  },
});

export default HomeScreen;
