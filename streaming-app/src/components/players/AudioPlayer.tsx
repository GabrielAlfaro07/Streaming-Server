import React from "react";
import FavoriteButton from "../buttons/FavoriteButton"; // Import the FavoriteButton component
import { Track } from "../../services/mediaService";

interface AudioPlayerProps {
  tracks: Track[];
  onTrackSelect: (track: Track) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks, onTrackSelect }) => {
  return (
    <div className="flex flex-col items-center">
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        {tracks.map((track, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
            onClick={() => onTrackSelect(track)}
          >
            <span>{track.name}</span>
            <span className="text-sm text-gray-500">({track.genre})</span>
            <FavoriteButton
              itemId={track.id}
              itemType="music"
              itemDetails={track}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioPlayer;
