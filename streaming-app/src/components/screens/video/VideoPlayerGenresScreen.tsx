import React from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";

const VideoPlayerGenres: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar will handle its own open/close logic */}
      <VideoPlayerSidebar />
      <div className="flex-grow flex justify-center items-center">
        <p className="text-lg">Video Player Genres</p>
      </div>
    </div>
  );
};
export default VideoPlayerGenres;
