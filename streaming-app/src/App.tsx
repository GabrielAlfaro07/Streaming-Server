import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import AudioPlayerHome from "./components/screens/audio/AudioPlayerHomeScreen";
import AudioPlayerGenres from "./components/screens/audio/AudioPlayerGenresScreen";
import AudioPlayerFavorites from "./components/screens/audio/AudioPlayerFavoritesScreen";
import AudioPlayerSearch from "./components/screens/audio/AudioPlayerSearchScreen";
import VideoPlayerHome from "./components/screens/video/VideoPlayerHomeScreen";
import VideoPlayerGenres from "./components/screens/video/VideoPlayerGenresScreen";
import VideoPlayerFavorites from "./components/screens/video/VideoPlayerFavoritesScreen";
import VideoPlayerSearch from "./components/screens/video/VideoPlayerSearchScreen";
import VideoPlayerScreen from "./components/screens/video/VideoPlayerScreen";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        {/* Audio Player Screens */}
        <Route path="/audio/home" element={<AudioPlayerHome />} />
        <Route path="/audio/genres" element={<AudioPlayerGenres />} />
        <Route path="/audio/favorites" element={<AudioPlayerFavorites />} />
        <Route path="/audio/search" element={<AudioPlayerSearch />} />

        {/* Video Player Screens */}
        <Route path="/video/home" element={<VideoPlayerHome />} />
        <Route path="/video/genres" element={<VideoPlayerGenres />} />
        <Route path="/video/favorites" element={<VideoPlayerFavorites />} />
        <Route path="/video/search" element={<VideoPlayerSearch />} />

        {/* Route for VideoPlayerScreen */}
        <Route path="/video/player" element={<VideoPlayerScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
