import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AudioHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Audio Streaming</Text>
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

export default AudioHeader;
