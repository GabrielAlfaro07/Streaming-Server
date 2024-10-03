import React, { useState, useEffect } from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";
import AudioPlayer from "../../players/AudioPlayer";
import Header from "../../headers/Header";
import AudioPlayerComponent from "./AudioPlayerComponent";
import { fetchTracks, Track } from "../../../services/mediaService";

const AudioPlayerHome: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);

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
    };
    loadTracks();
  }, []);

  return (
    <div className="flex h-screen relative">
      <AudioPlayerSidebar isOpen={isSidebarOpen} />

      <div className="flex-grow flex flex-col w-full">
        <Header
          title="Home"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        <div className="flex justify-center flex-grow">
          <div className="w-full lg:w-1/2 flex flex-col items-start p-4">
            <h2 className="text-3xl font-bold my-4">Music Collection</h2>
            <div className="w-full">
              {/* Pass the fetched tracks to the AudioPlayer */}
              <AudioPlayer tracks={tracks} onTrackSelect={handleTrackSelect} />
            </div>
          </div>
        </div>

        {/* Add a bottom padding to the main content */}
        <div className="pb-24"></div>

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

export default AudioPlayerHome;
