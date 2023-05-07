import { useState, useEffect } from 'react';

import { ref, StorageError, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { storage, database } from '../Firebase/config/firebase';

export type cameraSettings = {
  'camera': string,
  'film': string,
  'lens': string,
  'focalLength': string,
  'aperture': string,
  'shutterSpeed': string,
  'iso': string,
} | null;

export interface photoDocument {
  title: string;
  alt: string;
  dateTaken: string;
  story: string;
  settings: cameraSettings;
}

export interface useStoragePhotoArguments extends photoDocument {
  file: File;
  set: string;
  year: number;
  location: string;
}

export const useStoragePhoto = (args: useStoragePhotoArguments) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<StorageError | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const storageRef = ref(storage, `${args.set}/${args.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, args.file);
    
    const setDocumentRef =   doc(database, 'COLLECTION', args.set);
    const photoDocumentRef = doc(database, 'COLLECTION', args.set, 'PHOTOGRAPHS', args.file.name);
    
    uploadTask.on('state_changed', (snapshot) => {
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, (err) => {
      setError(err);
    }, async () => {
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

        setUrl(downloadURL);

        {setDoc(setDocumentRef, {
          name: args.set,
          year: args.year,
          location: args.location,
          createdAt: serverTimestamp(),
        });
        
        try {
          setDoc(photoDocumentRef, {
            title: args.title,
            alt: args.alt,
            url: downloadURL, 
            dateTaken: args.dateTaken,
            story: args.story,
            settings: args.settings,
            createdAt: serverTimestamp(),
          });
          console.log('added doc');
        } catch(err) {
          setError(err);
        }}
      });

      console.log(args.file);

      //! FIGURE OUT WHY IT IS ADDING THE DOCUMENT TWICE?????
      // https://firebase.google.com/docs/firestore/using-console?hl=en&authuser=0#non-existent_ancestor_documents

    });
  }, [args.file, args.set, args.year, args.location]);

  return { progress, url, error };
  
};
