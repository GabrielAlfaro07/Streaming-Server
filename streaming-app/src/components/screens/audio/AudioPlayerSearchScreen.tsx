import React, { useState, useEffect } from "react";
import AudioPlayerSidebar from "../../sidebars/AudioPlayerSidebar";
import Header from "../../headers/Header";
import { fetchTracks, Track } from "../../../services/mediaService"; // Adjust the import as necessary
import AudioPlayer from "../../players/AudioPlayer";
import SearchBar from "../../searchbars/Searchbar";
import AudioPlayerComponent from "./AudioPlayerComponent";

const AudioPlayerSearch: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = tracks.filter((track) =>
      track.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTracks(filtered);
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
      setFilteredTracks(fetchedTracks); // Initialize with all tracks
    };
    loadTracks();
  }, []);

  return (
    <div className="flex h-screen relative">
      <AudioPlayerSidebar isOpen={isSidebarOpen} />
      <div className="flex-grow flex flex-col w-full">
        <Header
          title="Search"
          isOpen={isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />

        <div className="flex justify-center flex-grow">
          <div className="w-full lg:w-1/2 flex flex-col items-start p-4">
            <h2 className="text-3xl font-bold my-4">Music Collection</h2>
            <div className="w-full">
              <SearchBar onSearch={handleSearch} />
              {/* Pass the fetched tracks to the AudioPlayer */}
              <AudioPlayer
                tracks={filteredTracks}
                onTrackSelect={handleTrackSelect}
              />
            </div>
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

export default AudioPlayerSearch;
