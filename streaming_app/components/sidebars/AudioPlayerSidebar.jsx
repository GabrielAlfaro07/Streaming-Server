import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AudioPlayerScreen from "../screens/AudioPlayerScreen";
import AudioPlayerHome from "../screens/audio-player-screens/AudioPlayerHome";
import AudioPlayerGenres from "../screens/audio-player-screens/AudioPlayerGenres";
import AudioPlayerTrends from "../screens/audio-player-screens/AudioPlayerTrends";
import AudioPlayerSearch from "../screens/audio-player-screens/AudioPlayerSearch";
import AudioPlayerSidebarLinks from "./AudioPlayerSidebarLinks";

const Drawer = createDrawerNavigator();

const AudioPlayerSidebar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerContent={(props) => <AudioPlayerSidebarLinks {...props} />}
      >
        <Drawer.Screen name="Home" component={AudioPlayerHome} />
        <Drawer.Screen name="Genres" component={AudioPlayerGenres} />
        <Drawer.Screen name="Trends" component={AudioPlayerTrends} />
        <Drawer.Screen name="Search" component={AudioPlayerSearch} />
        <Drawer.Screen name="Audio Player" component={AudioPlayerScreen} />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default AudioPlayerSidebar;
