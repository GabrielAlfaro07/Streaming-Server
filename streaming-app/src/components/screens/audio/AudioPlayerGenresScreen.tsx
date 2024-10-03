import React, { useState, useEffect } from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";
import Header from "../../headers/Header";
import AudioPlayerComponent from "./AudioPlayerComponent";
import AudioPlayer from "../../players/AudioPlayer"; // Import AudioPlayer component
import {
  fetchTracks,
  Track,
  getGenresFromTracks,
} from "../../../services/mediaService";

const AudioPlayerGenres: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTrackSelect = (track: Track) => {
    setSelectedTrack(track);
  };

  const handleClosePlayer = () => {
    setSelectedTrack(null);
  };

  // Fetch tracks when the component mounts
  useEffect(() => {
    const loadTracks = async () => {
      const fetchedTracks = await fetchTracks();
      setTracks(fetchedTracks);
      setGenres(getGenresFromTracks(fetchedTracks)); // Extract unique genres
    };
    loadTracks();
  }, []);

  return (
    <div className="flex h-screen">
      <AudioPlayerSidebar isOpen={isSidebarOpen} />

      <div className="flex-grow flex flex-col w-full">
        <Header
          title="Genres"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        <div className="flex justify-center flex-grow p-4">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl font-bold my-4">Music Genres</h2>

            {/* Render each genre and use AudioPlayer to display the tracks */}
            {genres.map((genre) => (
              <div key={genre} className="mb-4 w-full">
                <h3 className="text-2xl font-semibold">{genre}</h3>

                {/* Use the AudioPlayer component to display the tracks */}
                <AudioPlayer
                  tracks={tracks.filter((track) => track.genre === genre)}
                  onTrackSelect={handleTrackSelect}
                />
              </div>
            ))}
          </div>
        </div>

        {/* AudioPlayerComponent will be placed fixed at the bottom */}
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

export default AudioPlayerGenres;
