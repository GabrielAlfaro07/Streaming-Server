import { db } from "./firebaseConfig";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const addFavorite = async (
  userId: string,
  type: "music" | "movies",
  itemId: string,
  details: any
) => {
  console.log(
    `Adding favorite for user: ${userId}, type: ${type}, itemId: ${itemId}`
  );
  console.log("Details:", details);
  try {
    const userFavoritesRef = collection(db, "users", userId, "favorites", type);
    const itemRef = doc(userFavoritesRef, itemId);
    await setDoc(itemRef, details);
    console.log("Favorite added successfully.");
  } catch (error) {
    console.error("Error adding favorite:", error);
  }
};

export const getFavorites = async (
  userId: string,
  type: "music" | "movies"
) => {
  const userFavoritesRef = collection(db, "users", userId, "favorites", type);
  const q = query(userFavoritesRef);
  const querySnapshot = await getDocs(q);
  let favorites: any[] = [];
  querySnapshot.forEach((doc) => {
    favorites.push({ id: doc.id, ...doc.data() });
  });
  return favorites;
};
