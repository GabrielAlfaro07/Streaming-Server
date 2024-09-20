import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/screens/HomeScreen";
import AudioPlayerSidebar from "./components/sidebars/AudioPlayerSidebar";
import VideoPlayerSidebar from "./components/sidebars/VideoPlayerSidebar";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AudioPlayerSidebar"
          component={AudioPlayerSidebar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideoPlayerSidebar"
          component={VideoPlayerSidebar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
