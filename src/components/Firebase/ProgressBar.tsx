import React from 'react';
import { useEffect } from 'react';
import { useStoragePhoto } from '../Hooks/useStoragePhoto';
import clsx from 'clsx';

import { photoArgs } from '../Hooks/useStoragePhoto';
interface progressBarProps {
  useStorageArgs: photoArgs;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProgressBar({ useStorageArgs, setFile, setSubmit }: progressBarProps) {
  const { url, progress, error } = useStoragePhoto(useStorageArgs);
  
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
