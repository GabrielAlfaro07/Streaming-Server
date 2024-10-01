import React, { useState, useEffect } from "react";

interface Track {
  name: string;
  artist: string;
  genre: string;
  url: string;
}

interface AudioPlayerProps {
  onTrackSelect: (track: Track) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ onTrackSelect }) => {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    // Fetch the list of music files from the Flask server
    fetch(`${import.meta.env.VITE_FLASK_SERVER_IP}/music`)
      .then((response) => response.json())
      .then((data) => {
        const musicLinks = data.music.map((file: any) => ({
          name: file.name,
          artist: file.artist,
          genre: file.genre,
          url: `${import.meta.env.VITE_FLASK_SERVER_IP}/music/${file.file}`,
        }));
        setTracks(musicLinks);
      });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        {tracks.map((track, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
            onClick={() => onTrackSelect(track)} // Send selected track to parent
          >
            {track.name} by {track.artist} ({track.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioPlayer;
