import React from 'react';
import GenericPage from './GenericPage';
import PhotoFrame from '../components/PhotoFrame';
import useFirestorePhoto from '../components/Hooks/useFirestorePhoto';
import useSet from '../components/Hooks/useSet';

import { useParams } from 'react-router-dom';

export default function PhotoSet() {
  const {setID} = useParams();

  const {set} = useSet(setID);
  
  const docs = useFirestorePhoto(setID);
  console.log(docs);

  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
        {set?.data.name}
      </h1>
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-sans">
        {set?.data.year}, {set?.data.location}
      </h3>
      <p className="mb-2 text-base">
        {'For now, every set has this same generic blurb. Will change! Promise!'}
      </p>
      {docs.docs.map(doc => (
        <PhotoFrame
          key={doc.id}
          url={doc.url}
          title={doc.title}
          alt={doc.alt}
          date={doc.dateTaken}
          story={doc.story}
          settings={doc.settings}
        />
      ))}

    </GenericPage>
  );
}
