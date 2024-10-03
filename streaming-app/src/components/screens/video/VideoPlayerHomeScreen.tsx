import React, { useState, useEffect } from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";
import VideoPlayer from "../../players/VideoPlayer";
import Header from "../../headers/Header";
import { fetchVideos, Video } from "../../../services/mediaService";
import { useNavigate } from "react-router-dom";

const VideoPlayerHome: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const navigate = useNavigate();

  // Fetch videos when the component mounts
  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    };
    loadVideos();
  }, []);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Handle video selection and navigate to video player
  const handleVideoSelect = (video: Video) => {
    navigate("/video/player", { state: { selectedVideo: video } });
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
          <div className="w-full lg:w-1/2 flex flex-col items-start p-4">
            {/* Title */}
            <h2 className="text-3xl font-bold my-4">Movie Collection</h2>

            {/* Video player section */}
            <div className="w-full">
              <VideoPlayer videos={videos} onVideoSelect={handleVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerHome;
