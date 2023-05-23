import React, { useState } from 'react';

interface Props {
  camera: string;
  setCamera: (camera: string) => void;
  film: string;
  setFilm: (film: string) => void;
  lens: string;
  setLens: (lens: string) => void;
  focalLength: string;
  setFocalLength: (focalLength: string) => void;
  aperture: string;
  setAperture: (aperture: string) => void;
  shutterSpeed: string;
  setShutterSpeed: (shutterSpeed: string) => void;
  iso: string;
  setIso: (iso: string) => void;
}

export default function CameraSettingsForm(props: Props) {
  const [camera, setCamera] = useState('');
  const [film, setFilm] = useState('');
  const [lens, setLens] = useState('');
  const [focalLength, setFocalLength] = useState('');
  const [aperture, setAperture] = useState('');
  const [shutterSpeed, setShutterSpeed] = useState('');
  const [iso, setIso] = useState('');

  const handleCameraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCamera(e.target.value);
    props.setCamera(e.target.value);
  };
  
  // Similar handler functions for other inputs...

  return (
    <div className="flex flex-col gap-y-4">
      <label htmlFor="camera" className="text-xs text-antique-700/50">
        camera
        <input
          id="camera"
          type="text"
          placeholder='Nikon FE2'
          maxLength={64}
          value={camera}
          onChange={handleCameraChange}
        />
      </label>
      {/* Similar inputs for other camera settings... */}
    </div>
  );
}

