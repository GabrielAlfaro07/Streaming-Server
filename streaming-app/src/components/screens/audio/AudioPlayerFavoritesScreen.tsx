import React, { useState, useEffect } from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";
import AudioPlayerComponent from "./AudioPlayerComponent";
import AudioPlayer from "../../players/AudioPlayer";
import Header from "../../headers/Header";
import { Track } from "../../../services/mediaService";
import { getFavorites } from "../../../../useFavoritesService";
import { useFirebaseAuth } from "../../../../useFirebaseAuth";

const AudioPlayerFavorites: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const { user } = useFirebaseAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTrackSelect = (track: Track) => {
    setSelectedTrack(track);
  };

  const handleClosePlayer = () => {
    setSelectedTrack(null);
  };

  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        const favorites = await getFavorites(user.uid, "music");
        setTracks(favorites);
      };
      fetchFavorites();
    }
  }, [user]);

  return (
    <div className="flex h-screen relative">
      <AudioPlayerSidebar isOpen={isSidebarOpen} />

      <div className="flex-grow flex flex-col w-full">
        <Header
          title="Favorites"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        <div className="flex justify-center flex-grow">
          <div className="w-full lg:w-1/2 flex flex-col items-start p-4">
            <h2 className="text-3xl font-bold my-4">Your Favorite Tracks</h2>
            {user ? (
              tracks.length > 0 ? (
                <AudioPlayer
                  tracks={tracks}
                  onTrackSelect={handleTrackSelect}
                />
              ) : (
                <p>No favorite tracks found.</p>
              )
            ) : (
              <p className="text-lg text-center">
                Please log in to see your favorites
              </p>
            )}
          </div>
        </div>

        {selectedTrack && (
          <AudioPlayerComponent
            selectedTrack={selectedTrack}
            onClosePlayer={handleClosePlayer}
          />
        )}
      </div>
    </div>
  );
};

export default AudioPlayerFavorites;
