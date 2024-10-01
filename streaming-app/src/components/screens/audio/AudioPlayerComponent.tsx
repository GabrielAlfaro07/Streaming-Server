import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

interface Track {
  name: string;
  artist: string;
  genre: string;
  url: string;
}

const AudioPlayerComponent: React.FC<{ selectedTrack: Track | null }> = ({
  selectedTrack,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (selectedTrack) {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  }, [selectedTrack]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  // Function to handle seeking
  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const target = event.currentTarget; // Get the current target
      const rect = target.getBoundingClientRect(); // Get the bounding rectangle
      const clickX = event.clientX - rect.left; // Calculate click position relative to the progress bar
      const newTime = (clickX / rect.width) * audioRef.current.duration; // Calculate new time based on click position
      audioRef.current.currentTime = newTime; // Set the audio current time to the new time
      setProgress((clickX / rect.width) * 100); // Update the progress state
    }
  };

  // Function to seek forward 10 seconds
  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  // Function to seek backward 10 seconds
  const handleBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  if (!selectedTrack) return null;

  return (
    <div
      className={`fixed bottom-0 w-full bg-gray-800 text-white p-4 transition-transform duration-500 ${
        selectedTrack ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{selectedTrack.name}</h2>
          <p className="text-sm">{selectedTrack.artist}</p>
        </div>
        <button onClick={handlePlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
        </button>
      </div>

      <audio
        ref={audioRef}
        src={selectedTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />

      {/* Progress bar with seek functionality */}
      <div
        className="w-full bg-gray-600 h-2 rounded mt-2 cursor-pointer"
        onClick={handleSeek} // Attach the click handler
      >
        <div
          className="bg-green-500 h-full rounded"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Control Buttons for seeking */}
      <div className="flex space-x-4 mt-2">
        <button
          onClick={handleBackward}
          className="bg-transparent text-white p-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-500"
        >
          -10s
        </button>
        <button
          onClick={handleForward}
          className="bg-transparent text-white p-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-500"
        >
          +10s
        </button>
      </div>
    </div>
  );
};

export default AudioPlayerComponent;
