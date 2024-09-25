import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SidebarButton from "../buttons/SidebarButton";
import HomeButton from "../buttons/HomeButton"; // Import HomeButton

const AudioPlayerSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      {/* Button to toggle the sidebar when closed */}
      {!open && <SidebarButton onClick={() => setOpen(true)} isOpen={open} />}

      <div
        className={`${
          open ? "w-60" : "w-0"
        } fixed h-full bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden flex flex-col`}
      >
        {/* Button to close the sidebar when open */}
        {open && (
          <div className="absolute">
            <SidebarButton onClick={() => setOpen(false)} isOpen={open} />
          </div>
        )}

        <ul className="mt-20 mx-4 text-white flex-grow">
          <li className="p-4 transition duration-300 ease-in-out hover:bg-gray-700 rounded-full">
            <Link to="/audio/home">Home</Link>
          </li>
          <li className="p-4 transition duration-300 ease-in-out hover:bg-gray-700 rounded-full">
            <Link to="/audio/genres">Genres</Link>
          </li>
          <li className="p-4 transition duration-300 ease-in-out hover:bg-gray-700 rounded-full">
            <Link to="/audio/trends">Trends</Link>
          </li>
          <li className="p-4 transition duration-300 ease-in-out hover:bg-gray-700 rounded-full">
            <Link to="/audio/search">Search</Link>
          </li>
        </ul>
        <HomeButton />
      </div>

      {/* Main content */}
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AudioPlayerSidebar;
