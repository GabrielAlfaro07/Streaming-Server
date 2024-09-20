import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AudioPlayerTrends = () => {
  return (
    <View style={styles.container}>
      <Text>Audio Player Trends</Text>
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

export default AudioPlayerTrends;
