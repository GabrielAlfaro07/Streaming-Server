import React from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";

const AudioPlayerSearch: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar will handle its own open/close logic */}
      <AudioPlayerSidebar />
      <div className="flex-grow flex justify-center items-center">
        <p className="text-lg">Audio Player Search</p>
      </div>
    </div>
  );
};

export default AudioPlayerSearch;
