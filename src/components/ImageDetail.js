import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const ImageDetail = ({ title, imgSrc, score }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <Image source={imgSrc} />
      <Text style={styles.text}>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageDetail;
