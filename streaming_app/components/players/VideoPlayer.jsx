import React from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: "http://192.168.0.22:5000/video/viva_la_vida_coldplay.m3u8",
        }} // Replace with your video URL
        useNativeControls
        resizeMode="contain"
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300, // Adjust height as needed
  },
});

export default VideoPlayer;
