import React, { useState } from 'react';

interface Props {
  set: string;
  setSet: (set: string) => void;
  year: number;
  setYear: (year: number) => void;
  location: string;
  setLocation: (location: string) => void;
  description: string;
  setDescription: (description: string) => void;
}

export default function NewSetForm(props: Props) {
  const [set, setSet] = useState('');
  const [year, setYear] = useState(2023);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSet(e.target.value);
    props.setSet(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(e.target.value));
    props.setYear(parseInt(e.target.value));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    props.setLocation(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    props.setDescription(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <label htmlFor="new set name" className="text-xs text-antique-700/50">
        new set name
        <input
          id="new set name"
          placeholder="set name"
          maxLength={64}
          value={set}
          onChange={handleSetChange}
        />
      </label>
      <div className="flex gap-x-2">
        <label htmlFor="year" className="w-1/4 text-xs text-antique-700/50">
          year
          <input
            id="year"
            type="number"
            placeholder="year"
            maxLength={4}
            value={year}
            onChange={handleYearChange}
          />
        </label>
        <label htmlFor="location" className="flex-1 text-xs text-antique-700/50">
          location
          <input
            id="location"
            placeholder='location'
            maxLength={64}
            value={location}
            onChange={handleLocationChange}
          />
        </label>
      </div>
      <label htmlFor="set description" className="text-xs text-antique-700/50">
        set description
        <textarea
          id="set description"
          placeholder='write about the set...'
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>
    </div>
  );
}

