import { cert, getApps, initializeApp } from "firebase-admin/app";
import { ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount: ServiceAccount = {
  projectId: process.env.project_id,
  clientEmail: process.env.client_email,
  privateKey: process.env.private_key?.replace(/\\n/g, "\n"),
};

const app = getApps().length
  ? getApps()[0]
  : initializeApp({ credential: cert(serviceAccount) });

export const db = getFirestore(app);
