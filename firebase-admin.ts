import admin from "firebase-admin"
import { getFirestore } from "firebase-admin/firestore"

if (!admin.apps.length) {
  const serviceAccount = {
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY as string).replace(
      /\\n/g,
      "\n"
    ),
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
}

export const adminDb = getFirestore()
