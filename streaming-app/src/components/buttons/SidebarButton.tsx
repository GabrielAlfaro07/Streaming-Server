import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface SidebarButtonProps {
  onClick: () => void; // Function to handle opening the sidebar
  isOpen: boolean; // Prop to check if the sidebar is open
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-4 left-4 transition duration-300 ease-in-out rounded-full p-4 text-lg ${
        isOpen
          ? "bg-gray-800 text-white hover:bg-gray-600"
          : "bg-white text-gray-800 hover:bg-gray-600 hover:text-white"
      }`}
      aria-label="Toggle Sidebar"
    >
      <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
    </button>
  );
};

export default SidebarButton;
