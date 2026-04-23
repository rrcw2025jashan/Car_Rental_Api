import admin from "firebase-admin";

// Initialize Firebase (ONLY once)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

// Firestore instance
export const db = admin.firestore();

export default admin;