import React, { useState, useEffect } from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";
import AudioPlayerComponent from "./AudioPlayerComponent";
import AudioPlayer from "../../players/AudioPlayer";
import Header from "../../headers/Header";
import { Track, fetchTracks } from "../../../services/mediaService"; // Import fetchTracks
import { getFavorites } from "../../../../useFavoritesService";
import { useFirebaseAuth } from "../../../../useFirebaseAuth";

const AudioPlayerFavorites: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [favoriteTracks, setFavoriteTracks] = useState<Track[]>([]);
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
      const fetchFavoritesAndTracks = async () => {
        const favorites = await getFavorites(user.uid, "music"); // Get favorite IDs
        const allTracks = await fetchTracks(); // Fetch all tracks from the server
        // Filter tracks by favorite IDs
        const matchingTracks = allTracks.filter((track) =>
          favorites.some((fav) => fav.id === track.id)
        );
        setFavoriteTracks(matchingTracks); // Set favorite tracks
      };
      fetchFavoritesAndTracks();
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
            <div className="w-full">
              {user ? (
                favoriteTracks.length > 0 ? (
                  <AudioPlayer
                    tracks={favoriteTracks}
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
    </div>
  );
};

export default AudioPlayerFavorites;
