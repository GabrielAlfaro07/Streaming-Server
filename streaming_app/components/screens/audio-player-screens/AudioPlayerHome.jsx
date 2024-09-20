import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AudioPlayerHome = () => {
  return (
    <View style={styles.container}>
      <Text>Audio Player Home</Text>
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

export default AudioPlayerHome;
