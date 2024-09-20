import React from "react";
import { View, StyleSheet } from "react-native";
import AudioPlayer from "../players/AudioPlayer";
import AudioHeader from "../headers/AudioHeader";

const AudioPlayerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AudioHeader />
      <AudioPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AudioPlayerScreen;
