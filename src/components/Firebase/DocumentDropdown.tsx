import React, { useState } from 'react';
import useSets from '../Hooks/useSetsArray';

// import { photoArgs } from '../Hooks/useStoragePhoto';

interface DocumentDropdownProps {
  onDocumentSelected: (documentId: string) => void;
}

export default function DocumentDropdown({ onDocumentSelected }: DocumentDropdownProps) {
  // const [documents, setDocuments] = useState<setDocument[]>([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | undefined>(undefined);

  // useEffect(() => {
  //   const fetchDocuments = async () => {
  //     const querySnapshot = await getDocs(collection(database, 'COLLECTION'));
  //     const fetchedDocuments = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       data: doc.data(),
  //     }));
  //     setDocuments(fetchedDocuments);
  //   };

  //   fetchDocuments();
  // }, []);

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
