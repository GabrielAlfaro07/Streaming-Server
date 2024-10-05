import { useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Initialize Firestore structure for user favorites with "init" documents
const initializeUserFavorites = async (userId: string) => {
  const userFavoritesRef = doc(
    db,
    "users",
    userId,
    "favorites",
    "favoritesDocument"
  );
  const docSnapshot = await getDoc(userFavoritesRef);

  if (!docSnapshot.exists()) {
    // Create "favorites" document under the "favorites" collection
    await setDoc(userFavoritesRef, { initialized: true });

    // Now create "music" and "movies" collections under "favoritesDocument"
    const musicRef = doc(
      db,
      "users",
      userId,
      "favorites",
      "favoritesDocument",
      "music",
      "init"
    );
    const moviesRef = doc(
      db,
      "users",
      userId,
      "favorites",
      "favoritesDocument",
      "movies",
      "init"
    );

    // Create "init" documents in both subcollections
    await setDoc(musicRef, { initialized: true });
    await setDoc(moviesRef, { initialized: true });

    console.log("User structure initialized with favorites (music, movies).");
  }
};

export const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        await initializeUserFavorites(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await initializeUserFavorites(user.uid);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return { user, login, logout, loading };
};
