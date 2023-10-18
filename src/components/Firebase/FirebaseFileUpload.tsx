import React from 'react';
import { useState, useEffect } from 'react';

import PhotographUploadForm from './PhotographUploadForm';

import { useAuthStateChanged } from '../Hooks/useAuthStateChanged';

// //! BREAK THIS COMPONENT DOWN INTO SMALLER COMPONENTS JESUS CHRIST

export default function FirebaseFileUpload() {

  const [authenticated, setAuthenticated] = useState(false);
  useAuthStateChanged(isAuthenticated => {
    setAuthenticated(isAuthenticated);
  }); 

  return (
    <div>
      <div className="w-full p-8 my-4 lg:flex justify-evenly bg-white/50 rounded-3xl shadow-lg">
        {!authenticated ? (
          <span className="italic text-antique-700/50 select-none pointer-events-none">admin stuff</span>
        ) : (
          <>
            <PhotographUploadForm />
          </>
        )}
      </div>
    </div>
  );
}
