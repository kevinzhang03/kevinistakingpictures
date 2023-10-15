import React from 'react';

import GenericPage from './GenericPage';
import FirebaseLogin from '../components/Firebase/FirebaseLogin';
import FirebaseFileUpload from '../components/Firebase/FirebaseFileUpload';

export default function Admin() {
  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
        secret
      </h1>
      <p className="text-base">
        Admin stuff blah blah blah
      </p>
      <FirebaseLogin />
      <FirebaseFileUpload />
    </GenericPage>
  );
}
