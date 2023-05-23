import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuthStateChanged } from '../Hooks/useAuthStateChanged';
import { photoArgs } from '../Hooks/useStoragePhoto';
import ProgressBar from './ProgressBar';
import NewSetForm from './NewSetForm';
import ExistingSetForm from './ExistingSetForm';
import PhotoSettingsForm from './PhotoSettingsForm'; 
import CameraSettingsForm from './CameraSettingsForm';
import InputValidation from './InputValidation';

export default function FirebaseFileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submit, setSubmit] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  useAuthStateChanged(isAuthenticated => {
    setAuthenticated(isAuthenticated);
  }); 

  const [createNewSet, setCreateNewSet] = useState(true);
  const [existingSet, setExistingSet] = useState('');
  const [set, setSet] = useState('');
  const [year, setYear] = useState(2023);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [alt, setAlt] = useState('');
  const [dateTaken, setDateTaken] = useState('');
  const [story, setStory] = useState('');
  const [includeSettings, setIncludeSettings] = useState(false);
  const [camera, setCamera] = useState('');
  const [film, setFilm] = useState('');
  const [lens, setLens] = useState('');
  const [focalLength, setFocalLength] = useState('');
  const [aperture, setAperture] = useState('');
  const [shutterSpeed, setShutterSpeed] = useState('');
  const [iso, setIso] = useState('');
  
  const useStorageArgs = {/*...*/};
  
  const handleFileChange = (e) => {/*...*/};

  const allowSubmit = () => {/*...*/};

  const resetSettings = (e) => {/*...*/};

  return (
    <div>
      {/* JSX... */}
      <NewSetForm 
        set={set}
        setSet={setSet}
        year={year}
        setYear={setYear}
        location={location}
        setLocation={setLocation}
        description={description}
        setDescription={setDescription}
      />
      <ExistingSetForm
        existingSet={existingSet}
        setExistingSet={setExistingSet} 
      />
      <PhotoSettingsForm
        title={title}
        setTitle={setTitle}
        alt={alt}
        setAlt={setAlt}
        dateTaken={dateTaken}
        setDateTaken={setDateTaken}
        story={story}
        setStory={setStory}
      />
      <CameraSettingsForm
        camera={camera}
        setCamera={setCamera}
        film={film}
        setFilm={setFilm}
        lens={lens}
        setLens={setLens}
        focalLength={focalLength}
        setFocalLength={setFocalLength}
        aperture={aperture}
        setAperture={setAperture}
        shutterSpeed={shutterSpeed}
        setShutterSpeed={setShutterSpeed}
        iso={iso}
        setIso={setIso}
      />
      <InputValidation />
      {/* Rest of JSX... */}
    </div>
  );
}
