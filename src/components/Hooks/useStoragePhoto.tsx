import { useState, useEffect } from 'react';

import { ref, StorageError, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { storage, database } from '../Firebase/config/firebase';

// Trims string, remove consecutive spaces and converts all spaces to underscores
function replaceSpaces(set: string): string {
  return set.trim().replace(/\s+/g, ' ').replace(/ /g, '_').replace(/_+/g, '_');
}

function removeFileExtension(filename: string): string {
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) {
    return filename;
  } else {
    return filename.substring(0, lastDotIndex);
  }
}

export type cameraSettings = {
  camera: string,
  film: string,
  lens: string,
  focalLength: string,
  aperture: string,
  shutterSpeed: string,
  iso: string,
  lensFilter: string, 
} | null;

interface setArgs {
  set: string;
  existingSet: boolean;
  year: number;
  location: string;
  description: string;
}

export interface photoArgs extends setArgs {
  file: File;
  title: string;
  alt: string;
  dateTaken: string;
  story: string;
  settings: cameraSettings;
  lensFilter: string;
}

export const useStoragePhoto = (args: photoArgs) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<StorageError | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  //-----------
  const newSetNameID = replaceSpaces(args.set) + '_' + Date.now();
  const photoNameID = replaceSpaces(removeFileExtension(args.file.name)) + '_' + Date.now();
  //-----------

  useEffect(() => {
    const storageRef = ref(storage, `${args.existingSet ? args.set : newSetNameID}/${photoNameID}`);
    const uploadTask = uploadBytesResumable(storageRef, args.file);

    // const topLevelCollectionRef = collection(database, 'COLLECTION');
    
    // If the user specified to upload to an existing set, then upload to that one instead
    const setDocumentRef = doc(
      database,
      'COLLECTION',
      args.existingSet ? args.set : newSetNameID
    );
    const photoDocumentRef = doc(
      database,
      'COLLECTION',
      args.existingSet ? args.set : newSetNameID,
      'PHOTOGRAPHS',
      photoNameID
    );
    
    uploadTask.on('state_changed', (snapshot) => {
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, (err) => {
      setError(err);
    }, async () => {
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

        setUrl(downloadURL);
        
        // Do not overwrite the existing set
        !args.existingSet && setDoc(setDocumentRef, {
          name: args.set,
          year: args.year,
          location: args.location,
          description: args.description,
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
            filename: args.file.name,
          });
          console.log('added doc');
        } catch(err) {
          setError(err);
        }
      });

      console.log(args.file);

      //! FIGURE OUT WHY IT IS ADDING THE DOCUMENT TWICE?????

    });
  }, [args.file, args.set, args.year, args.location]);

  return { progress, url, error };
  
};

