import React from 'react';
import GenericPage from './GenericPage';
import PhotoFrame from '../components/PhotoFrame';
import useFirestorePhoto from '../components/Hooks/useFirestorePhoto';

interface photoSetProps {
  set: string;
}

export default function PhotoSet({ set }: photoSetProps) {
  const docs = useFirestorePhoto('calgary');
  console.log(docs);

  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
        {set}
      </h1>
      <p className="mb-2 text-base">
        A little blurb explaining the set. Also lives in the blog page.
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
