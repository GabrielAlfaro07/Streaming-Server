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

// Create the Firestore favorites structure when the user logs in
const initializeUserFavorites = async (userId: string) => {
  const userFavoritesRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(userFavoritesRef);
  if (!docSnapshot.exists()) {
    await setDoc(userFavoritesRef, { initialized: true });
    console.log("User Firestore structure initialized.");
  }
};

export const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);

      // Initialize the Firestore structure for the user upon login
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

    // Initialize the Firestore structure when the user logs in
    await initializeUserFavorites(user.uid);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return { user, login, logout, loading };
};
