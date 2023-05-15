import React, { useState } from 'react';
import useSets from '../Hooks/useSetsArray';

interface DocumentDropdownProps {
  onDocumentSelected: (documentId: string) => void;
}

export default function DocumentDropdown({ onDocumentSelected }: DocumentDropdownProps) {
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | undefined>(undefined);
  const {sets} = useSets();

  const handleDocumentSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setSelectedDocumentId(selectedId);
    onDocumentSelected(selectedId);
  };

  return (
    <select
      value={selectedDocumentId}
      onChange={handleDocumentSelected}
      className="w-full h-10 p-2 rounded-sm bg-white border border-antique-200 text-sm text-antique-900"
    >
      <option value="">select a set</option>
      {sets.map((doc) => (
        <option key={doc.id} value={doc.id}>
          {doc.data.name}, {doc.data.location}
        </option>
      ))}
    </select>
  );
}
