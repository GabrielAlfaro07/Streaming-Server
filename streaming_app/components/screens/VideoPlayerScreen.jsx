import React from "react";
import { View, StyleSheet } from "react-native";
import VideoPlayer from "../players/VideoPlayer";
import VideoHeader from "../headers/VideoHeader";

const VideoPlayerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <VideoHeader />
      <VideoPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoPlayerScreen;
