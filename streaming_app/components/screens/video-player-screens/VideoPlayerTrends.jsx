import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VideoPlayerTrends = () => {
  return (
    <View style={styles.container}>
      <Text>Video Player Trends</Text>
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

export default VideoPlayerTrends;
