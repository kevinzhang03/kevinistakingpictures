import React from 'react';
import {  useEffect } from 'react';
import { useStoragePhoto } from '../Hooks/useStoragePhoto';
import clsx from 'clsx';

interface progressBarProps {
  file: File;
  set: string;
  year: number,
  location: string,
  title: string;
  alt: string;
  dateTaken: string;
  story: string;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProgressBar({ file, set, year, location, title, alt, dateTaken, story, setFile, setSubmit }: progressBarProps) {
  const { url, progress, error } = useStoragePhoto(file, set, year, location, title, alt, dateTaken, story);
  
  // console.log(progress, url ? 'url exists' : null);

  useEffect(() => {
    if (url) {
      setFile(null);
      setSubmit(false);
    }
  }, [url, setFile]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <div
        className="h-fit w-full bg-antique-300/50 rounded-full"
      >
        <div
          className={clsx(
            'h-full px-2 flex justify-end align-middle rounded-full bg-periwinkle-500 transition-all duration-300'
          )}
          style={{ width: progress + '%'}}
        >
          <span className="text-caption text-white/50">
            {!url && progress < 100 ? (
              progress.toFixed(0)
            ) : (
              'Upload completed, 100'
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
