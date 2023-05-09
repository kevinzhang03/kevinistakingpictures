import { useState, useEffect } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { database } from '../Firebase/config/firebase';

export interface setDocument {
  id: string;
  data: DocumentData;
}

interface SetsData {
  sets: setDocument[];
  isLoading: boolean;
}

export default function useSets(): SetsData {
  const [isLoading, setIsLoading] = useState(true);
  const [sets, setSets] = useState<setDocument[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(database, 'COLLECTION'));
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setSets(fetchedData);
      setIsLoading(false);
    };
    if (database) {
      fetchDocuments();
    }
  }, []);

  return { sets, isLoading };
}
