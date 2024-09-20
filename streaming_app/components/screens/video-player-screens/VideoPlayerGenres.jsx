import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VideoPlayerGenres = () => {
  return (
    <View style={styles.container}>
      <Text>Video Player Genres</Text>
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

export default VideoPlayerGenres;
