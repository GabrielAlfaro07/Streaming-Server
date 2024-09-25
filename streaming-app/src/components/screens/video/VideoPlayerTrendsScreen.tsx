import React from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";

const VideoPlayerTrends: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar will handle its own open/close logic */}
      <VideoPlayerSidebar />
      <div className="flex-grow flex justify-center items-center">
        <p className="text-lg">Video Player Trends</p>
      </div>
    </div>
  );
};
export default VideoPlayerTrends;
