import React from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";
import AudioPlayer from "../../players/AudioPlayer";

const AudioPlayerHome: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar will handle its own open/close logic */}
      <AudioPlayerSidebar />
      <div className="flex-grow flex justify-center items-center">
        <p className="text-lg">Audio Player Home</p>
        <div className="flex justify-around mt-10">
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerHome;
