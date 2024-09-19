import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VideoHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Video Streaming</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: "#6200ea",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default VideoHeader;
