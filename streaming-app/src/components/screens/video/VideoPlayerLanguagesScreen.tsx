import React, { useState } from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";
import Header from "../../headers/Header"; // Import the Header component

const VideoPlayerTrends: React.FC = () => {
  // Manage sidebar open/close state
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar will handle its own open/close logic */}
      <VideoPlayerSidebar isOpen={isSidebarOpen} />

      <div className="flex-grow flex flex-col w-full">
        {/* Header component at the top of the screen */}
        <Header
          title="Languages"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        {/* Main content */}
        <div className="flex justify-center items-center flex-grow">
          <p className="text-lg">Video Player Languages</p>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayerTrends;
