import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/screens/HomeScreen";
import AudioPlayerScreen from "./components/screens/AudioPlayerScreen";
import VideoPlayerScreen from "./components/screens/VideoPlayerScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AudioPlayerScreen" component={AudioPlayerScreen} />
        <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
