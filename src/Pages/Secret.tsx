import React from 'react';

import GenericPage from './GenericPage';
import FirebaseLogin from '../components/Firebase/FirebaseLogin';
import FirebaseFileUpload from '../components/Firebase/FirebaseFileUpload';

import PhotoSet from './PhotoSet';

export default function Secret() {
  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
        secret
      </h1>
      <p className="mb-2 text-base">
        Well, right now there's not really a use for signing in. Mainly just playing around with what Firebase can do.
        However, I do plan on adding some features to this site that will make use of user accounts...
      </p>
      <p className="mb-2 text-base">
        Right now it's only me that can upload stuff :)
      </p>
      <div className="w-full p-8 my-8 lg:flex justify-evenly bg-white/50 rounded-3xl shadow-lg">
        <FirebaseLogin />
      </div>
      <FirebaseFileUpload />
    </GenericPage>
  );
}
