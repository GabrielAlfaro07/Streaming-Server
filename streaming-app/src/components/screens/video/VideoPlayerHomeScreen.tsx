import React, { useState } from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";
import VideoPlayer from "../../players/VideoPlayer";
import Header from "../../headers/Header"; // Import the Header component

const VideoPlayerHome: React.FC = () => {
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
          title="Home"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        {/* Main content */}
        <div className="flex justify-center flex-grow">
          {/* Main content container with space on both sides */}
          <div className="w-full lg:w-1/2 flex flex-col items-start p-4">
            {/* Title */}
            <h2 className="text-3xl font-bold my-4">Movie Collection</h2>

            {/* Video player section */}
            <div className="w-full">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerHome;
