import { db } from "./firebaseConfig";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

// Add a favorite item to the appropriate subcollection (music or movies)
export const addFavorite = async (
  userId: string,
  type: "music" | "movies",
  itemId: string
) => {
  try {
    // Debugging: Log the variables to ensure they're valid
    console.log("userId:", userId);
    console.log("type:", type);
    console.log("itemId:", itemId);

    // Check if userId, type, or itemId are undefined
    if (!userId || !type || !itemId) {
      throw new Error(
        "Invalid parameters: One or more required values are undefined."
      );
    }

    // Construct the Firestore document reference
    const itemRef = doc(
      db,
      "users",
      userId,
      "favorites",
      "favoritesDocument",
      type,
      itemId
    );

    // Add the document to the Firestore
    await setDoc(itemRef, { id: itemId });
    console.log(`${type} favorite added: ${itemId}`);
  } catch (error) {
    console.error(`Error adding ${type} favorite:`, error);
  }
};

// Fetch all favorite items of the specified type (music or movies)
export const getFavorites = async (
  userId: string,
  type: "music" | "movies"
) => {
  try {
    const typeRef = collection(
      db,
      "users",
      userId,
      "favorites",
      "favoritesDocument",
      type
    );
    const querySnapshot = await getDocs(typeRef);

    let favorites: any[] = [];
    querySnapshot.forEach((doc) => {
      if (doc.id !== "init") {
        favorites.push({ id: doc.id, ...doc.data() });
      }
    });
    return favorites;
  } catch (error) {
    console.error(`Error fetching ${type} favorites:`, error);
    return [];
  }
};

// Remove a favorite item from the specified subcollection
export const removeFavorite = async (
  userId: string,
  type: "music" | "movies",
  itemId: string
) => {
  try {
    const itemRef = doc(
      db,
      "users",
      userId,
      "favorites",
      "favoritesDocument",
      type,
      itemId
    );
    await deleteDoc(itemRef);
    console.log(`${type} favorite removed: ${itemId}`);
  } catch (error) {
    console.error(`Error removing ${type} favorite:`, error);
  }
};
