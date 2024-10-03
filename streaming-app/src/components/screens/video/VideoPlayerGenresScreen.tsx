import React, { useState, useEffect } from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";
import Header from "../../headers/Header";
import VideoPlayer from "../../players/VideoPlayer"; // Import VideoPlayer component
import {
  fetchVideos,
  Video,
  getGenresFromVideos,
} from "../../../services/mediaService";
import { useNavigate } from "react-router-dom";

const VideoPlayerGenres: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
      setGenres(getGenresFromVideos(fetchedVideos)); // Extract unique genres
    };
    loadVideos();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleVideoSelect = (video: Video) => {
    navigate("/video/player", { state: { selectedVideo: video } });
  };

  return (
    <div className="flex h-screen">
      <VideoPlayerSidebar isOpen={isSidebarOpen} />

      <div className="flex-grow flex flex-col w-full">
        <Header
          title="Genres"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        <div className="flex justify-center flex-grow">
          <div className="w-full lg:w-1/2 flex flex-col items-start p-4">
            <h2 className="text-3xl font-bold my-4">Movie Genres</h2>

            {/* Render each genre and use VideoPlayer to display the videos */}
            {genres.map((genre) => (
              <div key={genre} className="mb-4 w-full">
                <h3 className="text-2xl font-semibold">{genre}</h3>

                {/* Use the VideoPlayer component to display the videos */}
                <VideoPlayer
                  videos={videos.filter((video) => video.genre === genre)}
                  onVideoSelect={handleVideoSelect}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerGenres;
