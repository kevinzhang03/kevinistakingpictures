import React from 'react';
import { useEffect } from 'react';
import { useStorage } from '../Hooks/useStorage';
import clsx from 'clsx';

interface progressBarProps {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function ProgressBar({ file, setFile }: progressBarProps) {
  const { url, progress } = useStorage(file);
  
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
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
  );
}
