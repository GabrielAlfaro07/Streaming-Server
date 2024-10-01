import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Video {
  name: string;
  genre: string;
  url: string;
}

const VideoPlayer: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_FLASK_SERVER_IP}/movies`)
      .then((response) => response.json())
      .then((data) => {
        const videoLinks = data.movies.map((file: any) => ({
          name: file.name,
          genre: file.genre,
          url: `${import.meta.env.VITE_FLASK_SERVER_IP}/movies/${file.file}`,
        }));
        setVideos(videoLinks);
      });
  }, []);

  const handleVideoSelect = (video: Video) => {
    // Navigate to /video/player without adding the video name to the route
    navigate("/video/player", { state: { selectedVideo: video } });
  };

  return (
    <div className="flex flex-col items-center">
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        {videos.map((video, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
            onClick={() => handleVideoSelect(video)}
          >
            {video.name} ({video.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayer;
