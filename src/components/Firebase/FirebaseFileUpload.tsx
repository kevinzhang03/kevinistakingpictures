import React from 'react';
import { useState, useEffect } from 'react';

export default function FirebaseFileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && ['image/tiff', 'image/png', 'image/jpeg'].includes(selectedFile.type)) {
      setError(null);
      setFile(selectedFile);
    } else {
      setError('Please select only .png, .jpeg, or .tiff files.');
      setFile(null);
    }
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div className="w-full lg:w-72">
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/tiff, image/png, image/jpeg"
        className="w-full"
      />
      {file && (
        <span className="text-antique-500">
          {file.name}
        </span>
      )}
      {error && (
        <span className="text-xs italic text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
