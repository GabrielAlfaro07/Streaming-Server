import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AudioPlayer from "./components/AudioPlayer";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <VideoPlayer />
      </View>
      <View style={styles.section}>
        <AudioPlayer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 20,
  },
});

export default App;
