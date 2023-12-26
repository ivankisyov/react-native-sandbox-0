import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [];

  for (let i = 1; i <= 150; i++) {
    const age = Math.floor(Math.random() * (75 - 18 + 1)) + 18;
    friends.push({ name: `Friend ${i} - age ${age}` });
  }

  return (
    <View>
      <Text style={styles.heading}>List Screen</Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45,
  },
  item: {
    fontSize: 20,
    marginVertical: 150,
  },
});

export default ListScreen;
