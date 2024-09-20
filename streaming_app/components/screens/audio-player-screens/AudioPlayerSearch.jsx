import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AudioPlayerSearch = () => {
  return (
    <View style={styles.container}>
      <Text>Audio Player Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AudioPlayerSearch;
