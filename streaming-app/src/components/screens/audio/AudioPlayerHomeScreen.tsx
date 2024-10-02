import React, { useState } from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";
import AudioPlayer from "../../players/AudioPlayer";
import Header from "../../headers/Header";
import AudioPlayerComponent from "./AudioPlayerComponent"; // Import the new player component

interface Track {
  name: string;
  artist: string;
  genre: string;
  url: string;
}

const AudioPlayerHome: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTrackSelect = (track: Track) => {
    setSelectedTrack(track);
  };

  const handleClosePlayer = () => {
    setSelectedTrack(null); // Close the audio player
  };

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
            <h2 className="text-3xl font-bold my-4">Songs Collection</h2>
            <div className="w-full">
              <AudioPlayer onTrackSelect={handleTrackSelect} />
            </div>
          </div>
        </div>

        {/* Add a bottom padding to the main content */}
        <div className="pb-24"></div>

        {/* AudioPlayerComponent will be placed fixed at the bottom */}
        <AudioPlayerComponent
          selectedTrack={selectedTrack}
          onClosePlayer={handleClosePlayer}
        />
      </div>
    </div>
  );
};

export default AudioPlayerHome;
