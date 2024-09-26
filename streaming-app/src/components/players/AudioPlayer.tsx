import React, { useState, useEffect } from "react";

interface Track {
  name: string;
  url: string;
}

const AudioPlayer: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the list of music files from the Flask server
    fetch(`${import.meta.env.VITE_FLASK_SERVER_IP}/music`)
      .then((response) => response.json())
      .then((data) => {
        const musicLinks = data.music.map((file: string) => ({
          name: file,
          url: `${import.meta.env.VITE_FLASK_SERVER_IP}/music/${file}`,
        }));
        setTracks(musicLinks);
      });
  }, []);

  const playTrack = (url: string) => {
    setCurrentTrack(url);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Audio Player</h1>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        {tracks.map((track, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
            onClick={() => playTrack(track.url)}
          >
            {track.name}
          </li>
        ))}
      </ul>
      {currentTrack && (
        <audio controls className="mt-4 w-full max-w-md">
          <source src={currentTrack} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </div>
  );
};

export default AudioPlayer;
