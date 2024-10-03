import React, { useState, useEffect } from "react";
import VideoPlayerSidebar from "../../sidebars/VideoPlayerSidebar";
import VideoPlayer from "../../players/VideoPlayer";
import Header from "../../headers/Header";
import { Video } from "../../../services/mediaService";
import { getFavorites } from "../../../../useFavoritesService";
import { useFirebaseAuth } from "../../../../useFirebaseAuth";

const VideoPlayerFavorites: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const { user } = useFirebaseAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        const favorites = await getFavorites(user.uid, "movies");
        setVideos(favorites);
      };
      fetchFavorites();
    }
  }, [user]);

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
            {user ? (
              videos.length > 0 ? (
                <VideoPlayer videos={videos} onVideoSelect={() => {}} />
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
  );
};

export default VideoPlayerFavorites;
