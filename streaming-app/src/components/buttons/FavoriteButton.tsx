import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { addFavorite, getFavorites } from "../../../useFavoritesService";
import { useFirebaseAuth } from "../../../useFirebaseAuth";

type FavoriteButtonProps = {
  itemId: string;
  itemType: "music" | "movies";
  itemDetails: any;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  itemId,
  itemType,
  itemDetails,
}) => {
  const { user } = useFirebaseAuth();
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      if (user) {
        const favorites = await getFavorites(user.uid, itemType);
        const isAlreadyFavorited = favorites.some((item) => item.id === itemId);
        setIsFavorited(isAlreadyFavorited);
      }
    };
    checkFavorite();
  }, [user, itemId, itemType]);

  const handleFavorite = async () => {
    if (user) {
      if (!isFavorited) {
        // Only add the favorite if it's not already favorited
        await addFavorite(user.uid, itemType, itemId, itemDetails);
        console.log("Favorite added!");
      }
      setIsFavorited(!isFavorited);
    } else {
      alert("Please log in to favorite items.");
    }
  };

  return (
    <button onClick={handleFavorite} className="ml-2">
      {isFavorited ? (
        <FontAwesomeIcon
          icon={faStar}
          className="h-6 w-6 text-yellow-500 transition duration-200 ease-in-out"
        />
      ) : (
        <FontAwesomeIcon
          icon={faStar}
          className="h-6 w-6 text-gray-500 transition duration-200 ease-in-out"
        />
      )}
    </button>
  );
};

export default FavoriteButton;
