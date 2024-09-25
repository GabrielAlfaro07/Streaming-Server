import React from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";

const AudioPlayerTrends: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar will handle its own open/close logic */}
      <AudioPlayerSidebar />
      <div className="flex-grow flex justify-center items-center">
        <p className="text-lg">Audio Player Trends</p>
      </div>
    </div>
  );
};

export default AudioPlayerTrends;
