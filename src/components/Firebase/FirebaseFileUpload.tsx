import React from 'react';
import { useState, useEffect } from 'react';
import InputText from '../Atoms/InputText';
import ProgressBar from './ProgressBar';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuthStateChanged } from '../Hooks/useAuthStateChanged';
import { photoArgs } from '../Hooks/useStoragePhoto';
// import { cameraSettings } from '../Hooks/useStoragePhoto';
import clsx from 'clsx';
import DocumentDropdown from './DocumentDropdown';

//! BREAK THIS COMPONENT DOWN INTO SMALLER COMPONENTS JESUS CHRIST

export default function FirebaseFileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [allFieldsValid, setAllFieldsValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);
  useAuthStateChanged(isAuthenticated => {
    setAuthenticated(isAuthenticated);
  }); 

  const [existingSet, setExistingSet] = useState('');
  
  const [set, setSet] = useState('');
  const [year, setYear] = useState(2023);
  const [location, setLocation] = useState('');
  
  const [title, setTitle] = useState('');
  const [alt, setAlt] = useState('');
  const [dateTaken, setDateTaken] = useState('');
  const [story, setStory] = useState('');

  //! use this instead of the whole mess of states below???
  // const [settings, setSettings] = useState<cameraSettings>(null);
  
  const [camera, setCamera] = useState('');
  const [film, setFilm] = useState('');
  const [lens, setLens] = useState('');
  const [focalLength, setFocalLength] = useState('');
  const [aperture, setAperture] = useState('');
  const [shutterSpeed, setShutterSpeed] = useState('');
  const [iso, setIso] = useState('');

  const [includeSettings, setIncludeSettings] = useState(false);
  
  const useStorageArgs = {
    file: file,
    // I'm so sorry
    set: existingSet
      ? existingSet
      : set
        ? set
        : 'noSet',
    existingSet: existingSet ? true : false,
    year: year,
    location: location ? location : 'nowhere_really',
    title: title,
    alt: alt,
    dateTaken: dateTaken,
    story: story,
    settings: includeSettings ? {
      'camera': camera,
      'film': film,
      'lens': lens,
      'focalLength': focalLength,
      'aperture': aperture,
      'shutterSpeed': shutterSpeed,
      'iso': iso,
    } : null
  };
  
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

  const allowSubmit = () => {
    if (!file) {
      setError('you gotta upload a photo man...');
    } else if (!allFieldsValid) {
      setError('something other than the file is wrong man...');
    } else {
      setError(null);
      setSubmit(true);
    }
  };

  const resetSettings = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeSettings(JSON.parse(e.target.value));
    setCamera('');
    setFilm('');
    setLens('');
    setFocalLength('');
    setAperture('');
    setShutterSpeed('');
    setIso('');
  };

  useEffect(() => {
    if (!(
      validateTextInput(set)
      && validateNumberInput(year.toString())
      && validateTextInput(location)
      && validateTextInput(title)
      && validateTextInput(alt)
      && validateTextInput(dateTaken)
      && validateTextInput(story)
    )) {
      setAllFieldsValid(false);
    } else{
      setAllFieldsValid(true);
    }
    // console.log('hook was called', allFieldsValid ? 'GOOD' : 'BAD');

  }, [set, year, location, title, alt, dateTaken, story]);

  // TODO jesus christ fix the fucking classNames for the file input element...
  // TODO use useAuthStateChanged to disable buttons when not signed in
  // TODO style the date selector...
  // TODO add ability to read EXIF metadata https://www.npmjs.com/package/exifr

  return (
    <div>
      <span className="text-xs italic text-antique-700 select-none pointer-events-none">
        just a heads up: for now, only i am authorized to upload content to my site. let me cook in the meantime...
      </span>
      <div className="w-full p-8 my-4 lg:flex justify-evenly bg-white/50 rounded-3xl shadow-lg">
        {!authenticated ? (
          <span className="italic text-antique-700/50 select-none pointer-events-none">please sign in to access upload tool</span>
        ) : (
          <>
            <div className="w-full lg:w-4/12 flex flex-col gap-y-4">
              <label htmlFor="new set name" className="text-xs text-antique-700/50">
                new set name
                <InputText
                  id="new set name"
                  placeholder='set name (e.g. "Toronto 2021")'
                  maxLength={64}
                  invalid={validateTextInput(set)}
                  onChange={(e) => setSet(e.target.value)}
                />
              </label>
              <div className="flex gap-x-2">
                <label htmlFor="year" className="w-1/4 text-xs text-antique-700/50">
                  year
                  <InputText
                    id="year"
                    type="number"
                    placeholder="year"
                    maxLength={4}
                    invalid={validateTextInput(set)}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                  />
                </label>
                <label htmlFor="location" className="flex-1 text-xs text-antique-700/50">
                  location
                  <InputText
                    id="location"
                    placeholder='location'
                    maxLength={64}
                    invalid={validateTextInput(set)}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </label>
                {
                  //! DO NOT SANITIZE NAME FIELD FOR USER INPUT, BUT DO IT FOR THE ID
                  //! IF USER SELECTED EXISTING SET, THEN UPLOAD TO THE EXISTING SET'S ID
                }
              </div>
              {existingSet && (
                <span>
                  {existingSet}
                </span>
              )}
              <label htmlFor="choose existing set" className="text-xs text-antique-700/50">
                choose existing set
                <DocumentDropdown onDocumentSelected={setExistingSet} />
              </label>
              <input
                id="choose existing set"
                type="file"
                onChange={handleFileChange}
                accept="image/tiff, image/png, image/jpeg"
                className="
                  relative m-0 block w-full h-10
                  rounded-sm border border-solid border-antique-200
                  bg-clip-padding p-2
                  text-antique-500/50 italic
                  transition-color duration-300
                  file:not-italic
                  file:-m-2 file:overflow-hidden
                  file:rounded-none file:border-0 file:border-solid
                  file:border-inherit file:bg-periwinkle-200 file:px-2
                  file:py-2 file:text-periwinkle-700 file:transition-color
                  file:duration-300 file:[border-inline-end-width:1px]
                  file:[margin-inline-end:0.75rem] hover:file:bg-periwinkle-300
                  focus:outline-none focus:border-periwinkle-200 focus:ring-1 focus:ring-periwinkle-200
                "
              />
              <button
                disabled={!authenticated}
                onClick={allowSubmit}
                className="w-full p-2 select-none text-periwinkle-700
                  bg-periwinkle-200 hover:bg-periwinkle-300 active:bg-periwinkle-400
                  rounded-sm transition-color duration-300
                  disabled:pointer-events-none disabled:bg-antique-900/10 disabled:text-antique-900/20"
              >
                upload photograph
              </button>
              <AnimatePresence>
                {file && submit && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.15, 0.5, 0.5, 1] }}
                  >
                    <span className="text-antique-500">
                      Uploading {file.name}
                    </span>
                    <ProgressBar
                      useStorageArgs={useStorageArgs as photoArgs}
                      setFile={setFile}
                      setSubmit={setSubmit}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {!authenticated && (
                <span className="text-antique-700/50 italic text-xs">
                  please sign in before uploading a photo
                </span>
              )}
              {error && (
                <span className="text-xs italic text-red-500 select-none pointer-events-none">
                  {error}
                </span>
              )}
              {!(validateTextInput(set) && validateTextInput(location) && validateNumberInput(year.toString())) && (
                <span className="text-xs italic text-red-500 select-none pointer-events-none">
                  You messed up on at least one of the fields. Years 1800-2099 are allowed. Only use alphanumeric characters, and the following: !?_\-~@#&*(),.'"
                </span>
              )}
            </div>
            <div className="w-full lg:w-4/12 flex flex-col gap-y-4">
              <label htmlFor="title" className="text-xs text-antique-700/50">
                photo title
                <InputText
                  id="title"
                  placeholder='photo title'
                  maxLength={64}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="alt" className="text-xs text-antique-700/50">
                alt (for web use)
                <InputText
                  id="alt"
                  placeholder='alt'
                  maxLength={64}
                  onChange={(e) => setAlt(e.target.value)}
                />
              </label>
              <label htmlFor="date taken" className="text-xs text-antique-700/50">
                date taken
                <InputText
                  id="date taken"
                  type="date"
                  placeholder='date taken'
                  maxLength={64}
                  onChange={(e) => setDateTaken(e.target.value)}
                />
              </label>
              <label htmlFor="caption or story" className="text-xs text-antique-700/50">
                story/caption
                <textarea
                  id="caption or story"
                  placeholder='write a short caption for your picture, or the whole story of how you took this picture and what it means'
                  onChange={(e) => setStory(e.target.value)}
                  className={clsx(
                    'block w-full min-h-10 h-24 p-2',
                    'bg-white border border-antique-200 rounded-sm text-sm select-none',
                    'text-antique-900 placeholder:italic placeholder:text-antique-500/50',
                    'focus:outline-none focus:border-periwinkle-200 focus:ring-1 focus:ring-periwinkle-200',
                    'disabled:opacity-50 disabled:bg-slate-100 disabled:placeholder:blur-[1px]',
                    'invalid:border-pink-500 invalid:text-pink-600',
                    'focus:invalid:border-pink-500 focus:invalid:ring-pink-500',
                  )}
                />
              </label>
              <label htmlFor="include camera settings?" className="text-xs text-antique-700/50">
                include camera settings?
                <div id="include camera settings?" className="flex justify-evenly items-center h-10 gap-x-2 text-antique-900">
                  <label htmlFor="camera settings none" className="flex items-center mx-2 gap-x-2 text-sm">
                    <input
                      defaultChecked
                      id="camera settings none"
                      type="radio"
                      name="includeSettings"
                      value={false.toString()}
                      onChange={resetSettings}
                      className="w-4 h-4"
                    />
                    idc
                  </label>
                  <label htmlFor="camera settings digital" className="flex items-center mx-2 gap-x-2 text-sm">
                    <input
                      id="camera settings digital"
                      type="radio"
                      name="includeSettings"
                      value={true.toString()}
                      onChange={(e) => setIncludeSettings(JSON.parse(e.target.value))}
                      className="w-4 h-4"
                    />
                    nerd
                  </label>
                </div>
              </label>
              {includeSettings && (
                <div className="flex flex-col gap-y-4">
                  <label htmlFor="camera" className="text-xs text-antique-700/50">
                  camera
                    <InputText
                      id="camera"
                      type="text"
                      placeholder='Nikon FE2'
                      maxLength={64}
                      onChange={(e) => setCamera(e.target.value)}
                    />
                  </label>
                  <label htmlFor="film" className="text-xs text-antique-700/50">
                  film
                    <InputText
                      id="film"
                      type="text"
                      placeholder='Kodak Ektachrome E100'
                      maxLength={64}
                      onChange={(e) => setFilm(e.target.value)}
                    />
                  </label>
                  <label htmlFor="lens" className="text-xs text-antique-700/50">
                  lens
                    <InputText
                      id="lens"
                      type="text"
                      placeholder='Zoom-Nikkor 43-86mm f/3.5 AI'
                      maxLength={64}
                      onChange={(e) => setLens(e.target.value)}
                    />
                  </label>
                  <div className="flex gap-x-2">
                    <label
                      htmlFor="focal length"
                      className="text-xs text-antique-700/50"
                    >
                    focal length
                      <InputText
                        id="focal length"
                        type="text"
                        placeholder='56mm'
                        maxLength={64}
                        onChange={(e) => setFocalLength(e.target.value)}
                      />
                    </label>
                    <label
                      htmlFor="aperture"
                      className="text-xs text-antique-700/50"
                    >
                    aperture
                      <InputText
                        id="aperture"
                        type="text"
                        placeholder='f/8'
                        maxLength={64}
                        onChange={(e) => setAperture(e.target.value)}
                      />
                    </label>
                    <label
                      htmlFor="shutter speed"
                      className="text-xs text-antique-700/50"
                    >
                    shutter speed
                      <InputText
                        id="shutter speed"
                        type="text"
                        placeholder='1/250s'
                        maxLength={64}
                        onChange={(e) => setShutterSpeed(e.target.value)}
                      />
                    </label>
                    <label
                      htmlFor="ISO"
                      className="text-xs text-antique-700/50"
                    >
                    ISO
                      <InputText
                        id="ISO"
                        type="text"
                        placeholder='100'
                        maxLength={64}
                        onChange={(e) => setIso(e.target.value)}
                      />
                    </label>
                  </div>
                  {!(validateTextInput(set) && validateTextInput(location) && validateNumberInput(year.toString())) && (
                    <span className="text-xs italic text-red-500 select-none pointer-events-none">
                      You messed up on at least one of the fields. Years 1800-2099 are allowed. Only use alphanumeric characters, and the following: !?_\-~@#&*(),.'"
                    </span>
                  )}
                </div>
              )}
              {!validateFocalLengthInput(focalLength) && (
                <span className="text-xs italic text-red-500 select-none pointer-events-none">
                  Focal length format invalid. Valid examples: 14mm, 86mm, 400mm
                </span>
              )}
              {!validateApertureInput(aperture) && (
                <span className="text-xs italic text-red-500 select-none pointer-events-none">
                  Aperture format invalid. Valid examples: f/0.95, f/5.6, f/40
                </span>
              )}
              {!validateShutterSpeedInput(shutterSpeed) && (
                <span className="text-xs italic text-red-500 select-none pointer-events-none">
                  Shutter speed format invalid. Valid examples: 1/10s, 32s, 9.81s
                </span>
              )}
              {!validateISOInput(iso) && (
                <span className="text-xs italic text-red-500 select-none pointer-events-none">
                  Not sure how you screwed up the ISO. It's just the number...
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function validateTextInput(input: string): boolean {
  const regex = /^[a-zA-Z0-9!?_\-~@#&*(),.'"\s]*$/;
  return regex.test(input);
}

// Only allow years from 1900 to 2099
function validateNumberInput(input: string): boolean {
  const regex = /^(?:18|19|20)\d{2}$/;
  return regex.test(input);
}

function validateFocalLengthInput(input: string): boolean {
  const regex = /^$|^[1-9][0-9]*mm$/;
  return regex.test(input);
}

function validateApertureInput(input: string): boolean {
  const regex = /^$|^f\/\d+(?:\.\d+)?$/;
  return regex.test(input);
}

function validateShutterSpeedInput(input: string): boolean {
  const regex = /^$|^1\/(?!1s)[1-9][0-9]*s$|^[1-9][0-9]*\.[0-9]*[1-9]s$|^[1-9][0-9]*s$/;
  return regex.test(input);
}

function validateISOInput(input: string): boolean {
  const regex = /^$|^[1-9][0-9]*$/;
  return regex.test(input);
}
