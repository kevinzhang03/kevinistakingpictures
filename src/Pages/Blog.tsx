import React from 'react';

import GenericPage from './GenericPage';

export default function Blog() {
  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-[-0.25rem]">
        blog
      </h1>
      <span className="-mt-4 italic text-xs">
        {convertToCustomFormat(Date.now())}
      </span>
      <p className="text-base">
        cooking...
      </p>
      <p className="text-base">
        ...
      </p>
      <p className="text-base">
        still cooking...
      </p>
    </GenericPage>
  );
}

function convertToCustomFormat(timestamp: number): string {
  const date = new Date(timestamp);
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleString('en-US', options);
}