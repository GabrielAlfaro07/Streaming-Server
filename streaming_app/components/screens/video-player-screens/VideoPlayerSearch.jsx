import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VideoPlayerSearch = () => {
  return (
    <View style={styles.container}>
      <Text>Video Player Search</Text>
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

export default VideoPlayerSearch;
