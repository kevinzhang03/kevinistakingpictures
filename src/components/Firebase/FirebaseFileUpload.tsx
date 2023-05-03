import React from 'react';
import { useState } from 'react';
import ProgressBar from '../Atoms/ProgressBar';
import { AnimatePresence, motion } from 'framer-motion';

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

  return (
    <div className="w-full lg:w-72 flex flex-col gap-y-2">
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/tiff, image/png, image/jpeg"
        className="w-full"
      />
      <AnimatePresence>
        {file && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.15, 0.5, 0.5, 1] }}
          >
            <span className="text-antique-500">
              Uploading {file.name}
            </span>
            <ProgressBar file={file} setFile={setFile} />
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <span className="text-xs italic text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
