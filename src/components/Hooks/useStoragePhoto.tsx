import { useState, useEffect } from 'react';

import { ref, StorageError, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { storage, database } from '../Firebase/config/firebase';


export const useStoragePhoto = (file: File, set: string, setYear: number, setLocation: string, title: string, alt: string, dateTaken: string, story: string) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<StorageError | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const storageRef = ref(storage, `${set}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    const setDocumentRef =   doc(database, 'COLLECTION', set);
    const photoDocumentRef = doc(database, 'COLLECTION', set, 'PHOTOGRAPHS', file.name);
    
    uploadTask.on('state_changed', (snapshot) => {
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, (err) => {
      setError(err);
    }, async () => {
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

        setUrl(downloadURL);

        {setDoc(setDocumentRef, {
          name: set,
          year: setYear,
          location: setLocation,
          createdAt: serverTimestamp(),
        });
        
        try {
          setDoc(photoDocumentRef, {
            title: title,
            alt: alt,
            url: downloadURL, 
            dateTaken: dateTaken,
            story: story,
            createdAt: serverTimestamp(),
          });
          console.log('added doc');
        } catch(err) {
          setError(err);
        }}
      });

      console.log(file);

      //! FIGURE OUT WHY IT IS ADDING THE DOCUMENT TWICE?????
      // https://firebase.google.com/docs/firestore/using-console?hl=en&authuser=0#non-existent_ancestor_documents

    });
  }, [file, set, setYear, setLocation]);

  return { progress, url, error };
  
};
