import React from "react";
import { useNavigate } from "react-router-dom";
import audioIcon from "../../assets/audio-icon.png"; // Import the audio icon
import videoIcon from "../../assets/video-icon.png"; // Import the video icon

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-8">Welcome to SpotFlix!</h1>
      <h1 className="text-2xl mb-8">What would you like to do?</h1>
      <div className="flex justify-around w-full">
        <button
          className="flex flex-col items-center p-6 bg-gray-600 rounded-xl mx-2 transition duration-300 ease-in-out hover:bg-gray-400"
          onClick={() => navigate("/audio/home")} // Directly navigate to audio home
        >
          <img
            src={audioIcon} // Use the imported image
            alt="Audio Icon"
            className="w-12 h-12 mb-4"
          />
          <span className="text-lg">Audio</span>
        </button>
        <button
          className="flex flex-col items-center p-6 bg-gray-600 rounded-xl mx-2 transition duration-300 ease-in-out hover:bg-gray-400"
          onClick={() => navigate("/video/home")} // Directly navigate to video home
        >
          <img
            src={videoIcon} // Use the imported image
            alt="Video Icon"
            className="w-12 h-12 mb-4"
          />
          <span className="text-lg">Video</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
