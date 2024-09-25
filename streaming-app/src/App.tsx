import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import AudioPlayerHome from "./components/screens/audio/AudioPlayerHomeScreen";
import AudioPlayerGenres from "./components/screens/audio/AudioPlayerGenresScreen";
import AudioPlayerTrends from "./components/screens/audio/AudioPlayerTrendsScreen";
import AudioPlayerSearch from "./components/screens/audio/AudioPlayerSearchScreen";
import VideoPlayerHome from "./components/screens/video/VideoPlayerHomeScreen";
import VideoPlayerGenres from "./components/screens/video/VideoPlayerGenresScreen";
import VideoPlayerTrends from "./components/screens/video/VideoPlayerTrendsScreen";
import VideoPlayerSearch from "./components/screens/video/VideoPlayerSearchScreen";
import AudioPlayerSidebar from "./components/sidebars/AudioPlayerSidebar";
import VideoPlayerSidebar from "./components/sidebars/VideoPlayerSidebar";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        {/* Audio Player Home without Sidebar */}
        <Route path="/audio/home" element={<AudioPlayerHome />} />
        <Route path="/audio/genres" element={<AudioPlayerGenres />} />
        <Route path="/audio/trends" element={<AudioPlayerTrends />} />
        <Route path="/audio/search" element={<AudioPlayerSearch />} />

        {/* Video Player Home without Sidebar */}
        <Route path="/video/home" element={<VideoPlayerHome />} />
        <Route path="/video/genres" element={<VideoPlayerGenres />} />
        <Route path="/video/trends" element={<VideoPlayerTrends />} />
        <Route path="/video/search" element={<VideoPlayerSearch />} />

        {/* Audio Player Sidebar */}
        <Route path="/audio/*" element={<AudioPlayerSidebar />} />

        {/* Video Player Sidebar */}
        <Route path="/video/*" element={<VideoPlayerSidebar />} />
      </Routes>
    </Router>
  );
};

export default App;
