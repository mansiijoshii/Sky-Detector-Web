import { analytics } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(analytics, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(analytics, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(analytics, provider);
  const user = result.user;

  // add user to firestore
};

export const doSignOut = () => {
  return analytics.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(analytics, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(analytics.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(analytics.currentUser, {
    url: `${window.location.origin}/home`,
  });
};


