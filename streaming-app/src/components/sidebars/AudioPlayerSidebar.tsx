import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../buttons/HomeButton";

interface AudioPlayerSidebarProps {
  isOpen: boolean;
}

const AudioPlayerSidebar: React.FC<AudioPlayerSidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-16 h-[calc(100vh-4rem)] bg-gray-800 transition-all duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } flex flex-col w-60 z-50`}
      style={{
        visibility: isOpen ? "visible" : "hidden", // Hide it when closed
      }}
    >
      <ul className="mt-10 mx-4 text-white flex-grow">
        <li className="p-4 transition duration-300 ease-in-out hover:bg-gray-700 rounded-full">
          <Link to="/audio/home">Home</Link>
        </li>
        <li className="p-4 transition duration-300 ease-in-out hover:bg-gray-700 rounded-full">
          <Link to="/audio/genres">Genres</Link>
        </li>
        <li className="p-4 transition duration-300 ease-in-out hover:bg-gray-700 rounded-full">
          <Link to="/audio/favorites">Favorites</Link>
        </li>
        <li className="p-4 transition duration-300 ease-in-out hover:bg-gray-700 rounded-full">
          <Link to="/audio/search">Search</Link>
        </li>
      </ul>
      <HomeButton />
    </div>
  );
};

export default AudioPlayerSidebar;
