import React, { useState } from 'react';

interface Props {
  existingSet: string;
  setExistingSet: (set: string) => void; 
}

export default function ExistingSetForm(props: Props) {
  const [existingSet, setExistingSet] = useState('');

  const handleExistingSetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setExistingSet(e.target.value);
    props.setExistingSet(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <label htmlFor="choose existing set" className="text-xs text-antique-700/50">
        choose existing set
        <select
          id="choose existing set"
          value={existingSet}
          onChange={handleExistingSetChange}
        >
          <option value="">Select a set...</option>
          {/* Map over existing sets and render options */}
        </select>
      </label>
    </div>             
  );
}

