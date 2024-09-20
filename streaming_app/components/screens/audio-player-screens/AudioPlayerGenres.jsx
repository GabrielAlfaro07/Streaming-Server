import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AudioPlayerGenres = () => {
  return (
    <View style={styles.container}>
      <Text>Audio Player Genres</Text>
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

export default AudioPlayerGenres;
