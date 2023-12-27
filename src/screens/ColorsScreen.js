import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: item,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 255); // 0 - 255
  const green = Math.floor(Math.random() * 255); // 0 - 255
  const blue = Math.floor(Math.random() * 255); // 0 - 255

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColorsScreen;
