import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our application!</Text>
      <Text style={styles.title}>What would you like to do?</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("AudioPlayerSidebar")}
        >
          <Image
            source={require("../../assets/audio-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.optionText}>Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("VideoPlayerSidebar")}
        >
          <Image
            source={require("../../assets/video-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.optionText}>Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ddd",
    margin: 10,
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
  },
});

export default HomeScreen;
