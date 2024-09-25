import React from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";
import VideoPlayer from "../../players/VideoPlayer";

const VideoPlayerHome: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar will handle its own open/close logic */}
      <VideoPlayerSidebar />
      <div className="flex-grow flex justify-center items-center">
        <p className="text-lg">Video Player Home</p>
        <div className="flex justify-around mt-10">
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
};
export default VideoPlayerHome;
