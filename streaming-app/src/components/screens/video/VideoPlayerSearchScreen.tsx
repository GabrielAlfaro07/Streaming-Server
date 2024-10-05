import React, { useState, useEffect } from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";
import Header from "../../headers/Header";
import SearchBar from "../../searchbars/SearchBar"; // Import the SearchBar component
import { fetchVideos, Video } from "../../../services/mediaService"; // Adjust the import as necessary
import { useNavigate } from "react-router-dom";
import VideoPlayer from "../../players/VideoPlayer";

const VideoPlayerSearch: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = videos.filter((video) =>
      video.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filtered);
  };

  // Fetch videos when the component mounts
  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
      setFilteredVideos(fetchedVideos); // Initialize with all videos
    };
    loadVideos();
  }, []);

  // Handle video selection and navigate to video player
  const handleVideoSelect = (video: Video) => {
    navigate("/video/player", { state: { selectedVideo: video } });
  };

  return (
    <div className="flex h-screen relative">
      <VideoPlayerSidebar isOpen={isSidebarOpen} />
      <div className="flex-grow flex flex-col w-full">
        <Header
          title="Search"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        <div className="flex justify-center flex-grow">
          <div className="w-full lg:w-1/2 flex flex-col items-start p-4">
            <h2 className="text-3xl font-bold my-4">Movie Collection</h2>
            <div className="w-full">
              <SearchBar onSearch={handleSearch} />

              {/* Render filtered videos */}
              <VideoPlayer
                videos={filteredVideos}
                onVideoSelect={handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerSearch;
