import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomeButton: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex items-center m-4 p-4 text-white transition duration-300 ease-in-out hover:bg-gray-700 rounded-full"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
    </Link>
  );
};

export default HomeButton;
