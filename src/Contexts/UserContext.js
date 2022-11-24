import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Akash" });

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("auth state changed", currentUser);
    });
    return () => {
      unsubsribe();
    };
  }, []);

  const authInfo = { user, createUser, signIn, logOut, signInWithGoogle };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
