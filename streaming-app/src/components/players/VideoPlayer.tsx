import React from "react";
import FavoriteButton from "../buttons/FavoriteButton"; // Import the FavoriteButton component
import { Video } from "../../services/mediaService";

interface VideoPlayerProps {
  onVideoSelect: (video: Video) => void;
  videos: Video[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ onVideoSelect, videos }) => {
  return (
    <div className="flex flex-col items-center">
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        {videos.map((video, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
            onClick={() => onVideoSelect(video)}
          >
            <span>{video.name}</span>
            <span className="text-sm text-gray-500">({video.genre})</span>
            <FavoriteButton
              itemId={video.id}
              itemType="movies"
              itemDetails={video}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayer;
