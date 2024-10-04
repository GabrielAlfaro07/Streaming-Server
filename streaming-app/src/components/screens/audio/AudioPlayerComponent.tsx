import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import backwardIcon from "../../../assets/backward.png";
import forwardIcon from "../../../assets/forward.png";

interface Track {
  id: string;
  name: string;
  artist: string;
  genre: string;
  url: string;
}

interface AudioPlayerComponentProps {
  selectedTrack: Track | null;
  onClosePlayer: () => void; // Prop to close the player
}

const AudioPlayerComponent: React.FC<AudioPlayerComponentProps> = ({
  selectedTrack,
  onClosePlayer, // Add close function
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (selectedTrack && audioRef.current) {
      setIsPlaying(true);
      audioRef.current.play();
      setDuration(audioRef.current.duration);
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
      setCurrentTime(audioRef.current.currentTime);
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = event.currentTarget.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const newTime = (clickX / rect.width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress((clickX / rect.width) * 100);
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const handleBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    onClosePlayer(); // Call the close function from parent
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!selectedTrack) return null;

  return (
    <div
      className="fixed bottom-0 w-full bg-gray-800 text-white p-4 transition-transform duration-500 z-50"
      style={{ zIndex: 999 }}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-4 text-white text-2xl"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      {/* Top Row: Control Buttons */}
      <div className="flex justify-center items-center space-x-6 mb-4">
        <button onClick={handleBackward}>
          <img src={backwardIcon} alt="Backward 10s" className="h-8" />
        </button>
        <button onClick={handlePlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
        </button>
        <button onClick={handleForward}>
          <img src={forwardIcon} alt="Forward 10s" className="h-8" />
        </button>
      </div>

      {/* Second Row: Song Title */}
      <div className="text-center text-lg font-bold mb-2">
        {selectedTrack.name}
      </div>

      {/* Third Row: Artist */}
      <div className="text-center text-sm mb-2">{selectedTrack.artist}</div>

      {/* Fourth Row: Progress Bar */}
      <div
        className="w-full bg-gray-600 h-2 rounded mb-2 cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="bg-green-500 h-full rounded"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Fifth Row: Time Progress */}
      <div className="text-center text-xs">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>

      <audio
        ref={audioRef}
        src={selectedTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={handleClose}
        className="hidden"
      />
    </div>
  );
};

export default AudioPlayerComponent;
