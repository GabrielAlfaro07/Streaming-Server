import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const AudioPlayer = () => {
  const [sound, setSound] = React.useState();

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: "http://192.168.0.22:5000/audio/altale_sakuzyo.m3u8" } // Replace with your audio URL
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error("Error loading or playing sound:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Play Audio" onPress={playSound} />
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

export default AudioPlayer;
