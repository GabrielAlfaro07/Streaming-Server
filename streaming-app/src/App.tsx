import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import AudioPlayerSidebar from "./components/sidebars/AudioPlayerSidebar";
import VideoPlayerSidebar from "./components/sidebars/VideoPlayerSidebar";
import AudioPlayerHome from "./components/screens/audio/AudioPlayerHomeScreen";
import AudioPlayerGenres from "./components/screens/audio/AudioPlayerGenresScreen";
import AudioPlayerTrends from "./components/screens/audio/AudioPlayerTrendsScreen";
import AudioPlayerSearch from "./components/screens/audio/AudioPlayerSearchScreen";
import VideoPlayerHome from "./components/screens/video/VideoPlayerHomeScreen";
import VideoPlayerGenres from "./components/screens/video/VideoPlayerGenresScreen";
import VideoPlayerTrends from "./components/screens/video/VideoPlayerTrendsScreen";
import VideoPlayerSearch from "./components/screens/video/VideoPlayerSearchScreen";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        {/* Audio Player Sidebar Routes */}
        <Route path="/audio/*" element={<AudioPlayerSidebar />}>
          {/* Default route to redirect to home screen */}
          <Route index element={<AudioPlayerHome />} />
          <Route path="home" element={<AudioPlayerHome />} />
          <Route path="genres" element={<AudioPlayerGenres />} />
          <Route path="trends" element={<AudioPlayerTrends />} />
          <Route path="search" element={<AudioPlayerSearch />} />
        </Route>

        {/* Video Player Sidebar Routes */}
        <Route path="/video/*" element={<VideoPlayerSidebar />}>
          {/* Default route to redirect to home screen */}
          <Route index element={<VideoPlayerHome />} />
          <Route path="home" element={<VideoPlayerHome />} />
          <Route path="genres" element={<VideoPlayerGenres />} />
          <Route path="trends" element={<VideoPlayerTrends />} />
          <Route path="search" element={<VideoPlayerSearch />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
