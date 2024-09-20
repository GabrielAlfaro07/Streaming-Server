import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VideoPlayerHome = () => {
  return (
    <View style={styles.container}>
      <Text>Video Player Home</Text>
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

export default VideoPlayerHome;
