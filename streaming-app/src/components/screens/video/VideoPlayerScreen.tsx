import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const VideoPlayerScreen: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedVideo } = location.state || {};
  const [showTitle, setShowTitle] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement | null>(null); // Create a reference to the video element

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleMouseMove = () => {
      setShowTitle(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowTitle(false);
      }, 2000); // Hide title and buttons after 3 seconds of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Check if no video was selected
  if (!selectedVideo) {
    return <div>No video selected</div>;
  }

  // Function to handle back navigation with fallback to home if no history
  const handleBackClick = () => {
    console.log("Back button clicked!");
    if (window.history.length > 1) {
      navigate(-1); // Go back if there is a history
    } else {
      navigate("/"); // Fallback to home if no history
    }
  };

  // Function to seek forward 10 seconds
  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  // Function to seek backward 10 seconds
  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Title, Back Button, and Control Buttons overlay, all will fade out together */}
      {showTitle && (
        <>
          {/* Title and Back Button */}
          <div className="absolute top-0 w-full p-4 bg-black bg-opacity-50 text-white transition-opacity duration-300 flex items-center z-50">
            {/* Back Button */}
            <button
              onClick={handleBackClick}
              className="mx-4 text-white transition-opacity p-2 duration-300 z-50 rounded-full hover:bg-gray-800"
            >
              <FontAwesomeIcon icon={faArrowLeft} size="xl" />
            </button>

            {/* Video Title */}
            <h1 className="text-2xl font-bold">{selectedVideo.name}</h1>
          </div>

          {/* Seek Control Buttons */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
            <button
              onClick={handleBackward}
              className="bg-transparent text-white p-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-800"
            >
              -10s
            </button>
            <button
              onClick={handleForward}
              className="bg-transparent text-white p-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-800"
            >
              +10s
            </button>
          </div>
        </>
      )}

      {/* Video Player */}
      <video
        ref={videoRef} // Attach the ref to the video element
        className="h-full w-full object-cover"
        controls
        src={selectedVideo.url}
        autoPlay
      />
    </div>
  );
};

export default VideoPlayerScreen;
