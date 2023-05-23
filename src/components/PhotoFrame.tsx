import React from 'react';
import { cameraSettings } from './Hooks/useStoragePhoto';

interface PhotoFrameProps {
  url: string;
  title: string;
  alt: string;
  date: string;
  story: string;
  settings: cameraSettings;
}

export default function PhotoFrame({ url, title, alt, date, story, settings }: PhotoFrameProps) {
  return (
    <div className="bg-white flex flex-col gap-y-4 p-4 my-8 drop-shadow-lg">
      {title && (
        <h3 className="cursor-default text-2xl font-medium text-center font-display">
          {title}
        </h3>
      )}
      <img
        src={url}
        alt={alt}
        className="w-full select-none pointer-events-none"
      />
      {/* <button className="w-full"> */}
      {/* </button> */}
      <div className="font-display cursor-default text-caption flex justify-between mt-[-0.75rem] italic opacity-50">
        {Settings(settings)}
        {date && (<span className="ml-auto">{date}</span>)}
      </div>
      {story && (<p>{story}</p>)}
    </div>
  );
}

// Lists field of cameraSettings, separated by commas and a pipe
function Settings(settings: cameraSettings) {
  return (
    <>
      {settings && (
        <span>
          {
            [
              [settings.camera, settings.film, settings.lens, settings.lensFilter],
              [settings.focalLength, settings.aperture, settings.shutterSpeed, settings.iso],
            ]
              .map((fields) => fields.filter(Boolean).join(', '))
              .filter(Boolean)
              .join(' | ')
          }
        </span>
      )}
    </>
  );
}

