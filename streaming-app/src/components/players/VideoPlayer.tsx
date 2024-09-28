import React, { useState, useEffect } from "react";

interface Video {
  name: string;
  genre: string;
  url: string;
}

const VideoPlayer: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the list of video files from the Flask server
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

  const playVideo = (url: string) => {
    setCurrentVideo(url);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Video Player</h1>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        {videos.map((video, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
            onClick={() => playVideo(video.url)}
          >
            {video.name} ({video.genre})
          </li>
        ))}
      </ul>
      {currentVideo && (
        <video controls className="mt-4 w-full max-w-md">
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
