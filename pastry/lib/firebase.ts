import { cert, getApps, initializeApp } from "firebase-admin/app";
import { ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

// Load configuration from environment variables. All variables are optional so
// the module can be evaluated in environments where Firebase credentials are
// not provided (for example, during local testing). However, Firestore will not
// work until they are supplied.
const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\n/g, String.fromCharCode(10)),
};

const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp({
        credential: cert(serviceAccount),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      });

export const db = getFirestore(app);
export const bucket = getStorage(app).bucket(
  process.env.FIREBASE_STORAGE_BUCKET
);
