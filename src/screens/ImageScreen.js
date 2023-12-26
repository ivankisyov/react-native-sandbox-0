import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ImageScreen</Text>
      <ImageDetail
        title="Beach"
        imgSrc={require("../../assets/beach.jpg")}
        score="9"
      />
      <ImageDetail
        title="Forest"
        imgSrc={require("../../assets/forest.jpg")}
        score="3"
      />
      <ImageDetail
        title="Mountain"
        imgSrc={require("../../assets/mountain.jpg")}
        score="1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
