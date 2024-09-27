import React from "react";
import SidebarButton from "../buttons/SidebarButton"; // Import SidebarButton component

interface HeaderProps {
  title: string; // Title of the screen
  isOpen: boolean; // Sidebar state
  onToggleSidebar: () => void; // Function to toggle the sidebar
}

const Header: React.FC<HeaderProps> = ({ title, isOpen, onToggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4">
      {/* Sidebar Button on the left */}
      <SidebarButton onClick={onToggleSidebar} isOpen={isOpen} />

      {/* Screen title centered */}
      <h1 className="flex-grow text-center text-2xl font-semibold m-1">
        {title}
      </h1>
    </header>
  );
};

export default Header;
