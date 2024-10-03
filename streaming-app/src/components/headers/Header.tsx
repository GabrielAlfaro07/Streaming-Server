import React from "react";
import SidebarButton from "../buttons/SidebarButton"; // Import SidebarButton component
import AuthButtons from "../buttons/AuthButtons"; // Import AuthButtons component
import Profile from "../profile/Profile"; // Import Profile component
import { useFirebaseAuth } from "../../../useFirebaseAuth"; // Import useFirebaseAuth hook

interface HeaderProps {
  title: string; // Title of the screen
  isOpen: boolean; // Sidebar state
  onToggleSidebar: () => void; // Function to toggle the sidebar
}

const Header: React.FC<HeaderProps> = ({ title, isOpen, onToggleSidebar }) => {
  const { user } = useFirebaseAuth(); // Get user state from Firebase auth

  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4">
      {/* Sidebar Button on the left */}
      <SidebarButton onClick={onToggleSidebar} isOpen={isOpen} />

      {/* Screen title centered */}
      <h1 className="flex-grow text-center text-2xl font-semibold m-1">
        {title}
      </h1>

      {/* Auth Buttons and Profile on the right */}
      <div className="absolute right-4 flex items-center space-x-4">
        {!user ? (
          <AuthButtons /> // Display login button when user is not authenticated
        ) : (
          <>
            <Profile />
            <AuthButtons />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
