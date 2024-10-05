import React, { useState, useEffect } from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";
import VideoPlayer from "../../players/VideoPlayer";
import Header from "../../headers/Header";
import { Video, fetchVideos } from "../../../services/mediaService"; // Import fetchVideos
import { getFavorites } from "../../../../useFavoritesService";
import { useFirebaseAuth } from "../../../../useFirebaseAuth";
import { useNavigate } from "react-router-dom";

const VideoPlayerFavorites: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [favoriteVideos, setFavoriteVideos] = useState<Video[]>([]);
  const { user } = useFirebaseAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (user) {
      const fetchFavoritesAndVideos = async () => {
        const favorites = await getFavorites(user.uid, "movies"); // Get favorite IDs
        const allVideos = await fetchVideos(); // Fetch all videos from the server
        // Filter videos by favorite IDs
        const matchingVideos = allVideos.filter((video) =>
          favorites.some((fav) => fav.id === video.id)
        );
        setFavoriteVideos(matchingVideos); // Set favorite videos
      };
      fetchFavoritesAndVideos();
    }
  }, [user]);

  const handleVideoSelect = (video: Video) => {
    navigate("/video/player", { state: { selectedVideo: video } });
  };

  return (
    <div className="flex h-screen">
      <VideoPlayerSidebar isOpen={isSidebarOpen} />

      <div className="flex-grow flex flex-col w-full">
        <Header
          title="Favorites"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        <div className="flex justify-center flex-grow">
          <div className="w-full lg:w-1/2 flex flex-col items-start p-4">
            <h2 className="text-3xl font-bold my-4">Your Favorite Movies</h2>
            <div className="w-full">
              {user ? (
                favoriteVideos.length > 0 ? (
                  <VideoPlayer
                    videos={favoriteVideos}
                    onVideoSelect={handleVideoSelect}
                  />
                ) : (
                  <p>No favorite movies found.</p>
                )
              ) : (
                <p className="text-lg text-center">
                  Please log in to see your favorites
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerFavorites;
