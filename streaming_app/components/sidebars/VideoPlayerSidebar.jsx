import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import VideoPlayerScreen from "../screens/VideoPlayerScreen";
import VideoPlayerHome from "../screens/video-player-screens/VideoPlayerHome";
import VideoPlayerGenres from "../screens/video-player-screens/VideoPlayerGenres";
import VideoPlayerTrends from "../screens/video-player-screens/VideoPlayerTrends";
import VideoPlayerSearch from "../screens/video-player-screens/VideoPlayerSearch";
import VideoPlayerSidebarLinks from "./VideoPlayerSidebarLinks";

const Drawer = createDrawerNavigator();

const VideoPlayerSidebar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerContent={(props) => <VideoPlayerSidebarLinks {...props} />}
      >
        <Drawer.Screen name="Home" component={VideoPlayerHome} />
        <Drawer.Screen name="Genres" component={VideoPlayerGenres} />
        <Drawer.Screen name="Trends" component={VideoPlayerTrends} />
        <Drawer.Screen name="Search" component={VideoPlayerSearch} />
        <Drawer.Screen name="Video Player" component={VideoPlayerScreen} />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default VideoPlayerSidebar;
