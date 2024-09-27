import React, { useState } from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";
import AudioPlayer from "../../players/AudioPlayer";
import Header from "../../headers/Header"; // Import the Header component

const AudioPlayerGenres: React.FC = () => {
  // Manage sidebar open/close state
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar will handle its own open/close logic */}
      <AudioPlayerSidebar isOpen={isSidebarOpen} />

      <div className="flex-grow flex flex-col w-full">
        {/* Header component at the top of the screen */}
        <Header
          title="Genres"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        {/* Main content */}
        <div className="flex justify-center items-center flex-grow">
          <p className="text-lg">Audio Player Genres</p>
          <div className="flex justify-around mt-10">
            <AudioPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerGenres;
