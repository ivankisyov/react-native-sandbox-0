import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  // state === { counter: number }
  // action === { type: 'increment' || 'decrement' }
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return state.counter === 0
        ? state
        : { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Text style={styles.text}>Count: {state.counter}</Text>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterScreen;
