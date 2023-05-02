import React from 'react';

import GenericPage from './GenericPage';
import FirebaseLogin from '../components/FirebaseLogin';

export default function Secret() {
  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
        secret
      </h1>
      <FirebaseLogin />
    </GenericPage>
  );
}
