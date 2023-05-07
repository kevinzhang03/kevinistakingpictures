import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, DocumentData } from 'firebase/firestore';
import { database } from '../Firebase/config/firebase';
import { photoDocument } from './useStoragePhoto';

interface photoData extends photoDocument, DocumentData {
  id: string;
  url: string
  createdAt: string;
}

const useFirestorePhoto = (set: string) => {
  const [docs, setDocs] = useState<photoData[]>([]);

  useEffect(() => {
    const getDocuments = async () => {
      try {
        const q = query(collection(database, 'COLLECTION', set, 'PHOTOGRAPHS'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const documents: photoData[] = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as photoData));
          setDocs(documents);
        });
    
        return () => unsubscribe();
      } catch (err) {
        console.error(err);
      }
    };

    getDocuments();
  }, [set]);  

  return { docs };
};

export default useFirestorePhoto;
