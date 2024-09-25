import React from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";

const AudioPlayerHome: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar will handle its own open/close logic */}
      <AudioPlayerSidebar />
      <div className="flex-grow flex justify-center items-center">
        <p className="text-lg">Audio Player Home</p>
      </div>
    </div>
  );
};

export default AudioPlayerHome;
