import { useState, useEffect } from 'react';
import { doc, getDoc, DocumentData } from 'firebase/firestore';
import { database } from '../Firebase/config/firebase';

export interface SetDocument {
  id: string;
  data: DocumentData;
}

interface SetData {
  set: SetDocument | null;
  isLoading: boolean;
  error: Error | null;
}

export default function useSet(setID: string | undefined): SetData {
  const [isLoading, setIsLoading] = useState(true);
  const [set, setSet] = useState<SetDocument | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDocument = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(database, 'COLLECTION', setID as string);
        const querySnapshot = await getDoc(docRef);
        if (querySnapshot.exists()) {
          setSet({
            id: querySnapshot.id,
            data: querySnapshot.data()
          });
        } else {
          setError(new Error(`Set with ID '${setID}' does not exist.`));
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocument();
  }, [setID]);

  return { set, isLoading, error };
}
