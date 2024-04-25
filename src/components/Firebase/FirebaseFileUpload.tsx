import React from 'react';
import { useState } from 'react';

import PhotographUploadForm from './PhotographUploadForm';
import BlogUploadForm from './BlogUploadForm';

import { useAuthStateChanged } from '../Hooks/useAuthStateChanged';

export default function FirebaseFileUpload() {

  const [authenticated, setAuthenticated] = useState(false);
  useAuthStateChanged(isAuthenticated => {
    setAuthenticated(isAuthenticated);
  }); 

  const uploadForms = [
    <PhotographUploadForm key="PhotographUploadForm" />,
    <BlogUploadForm key="BlogUploadForm" />,
  ];

  return (
    <div>
      {!authenticated ? (
        <span className="italic text-antique-700/50 select-none pointer-events-none">admin stuff</span>
      ) : (
        <>
          {uploadForms.map((Form, index) => (
            <div key={index} className="w-full p-8 my-4 lg:flex justify-evenly bg-white/50 rounded-3xl shadow-lg">
              {Form}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
