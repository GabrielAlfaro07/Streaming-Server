import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const VideoPlayerScreen: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedVideo } = location.state || {};
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleMouseMove = () => {
      setShowTitle(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowTitle(false);
      }, 3000); // Hide title and button after 3 seconds of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  if (!selectedVideo) {
    return <div>No video selected</div>;
  }

  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Title and X button overlay, both will fade out together */}
      {showTitle && (
        <div className="absolute top-0 w-full p-4 bg-black bg-opacity-50 text-white transition-opacity duration-300">
          <h1 className="text-2xl font-bold">{selectedVideo.name}</h1>
        </div>
      )}

      {/* Video Player */}
      <video
        className="h-full w-full object-cover"
        controls
        src={selectedVideo.url}
        autoPlay
      />

      {/* X Button */}
      <button
        onClick={() => navigate(-1)} // Navigate back
        className={`absolute top-4 right-4 text-white transition-opacity duration-300 ${
          showTitle ? "opacity-100" : "opacity-0"
        }`} // The button will fade out
      >
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </button>
    </div>
  );
};

export default VideoPlayerScreen;
