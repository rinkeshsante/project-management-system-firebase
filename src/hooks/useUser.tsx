import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useState } from "react";

export default function useUser() {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, () => {
    setUser(auth.currentUser);
  });

  return { user, auth };
}
