import type { NextApiRequest, NextApiResponse } from 'next';
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('@/firebase-admin.json');
const admin = require('firebase-admin');

export async function getAllWords() {
  const COLLECTION_NAME = 'words';
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    });
  }
  const db = getFirestore();
  const docRef = await db.collection(COLLECTION_NAME).get();

  let data: any = [];

  docRef.forEach((doc: any) => {
    data.push(doc.data());
  })

  return data 
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = await getAllWords();

  const response = {
    status: 200,
    data: data
  }
  res.status(200).json(response);
}
