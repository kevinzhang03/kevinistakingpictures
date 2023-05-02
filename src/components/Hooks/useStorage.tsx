import { useState, useEffect } from 'react';

import { ref, StorageError, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../Firebase/config/firebase';

export const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<StorageError | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    uploadTask.on('state_changed', (snapshot) => {
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, (err) => {
      setError(err);
    }, async () => {
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL);
        console.log('File available at', downloadURL);
      });
    });
  }, [file]);

  return { progress, url, error };
  
};
