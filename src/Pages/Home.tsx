import React from 'react';

import GenericPage from './GenericPage';
// import PhotoFrame from '../components/PhotoFrame';

export default function Home() {
  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
        i am taking pictures
      </h1>
      <p className="text-base">
        Welcome to my (new) site! This has been my little passion project for the last little bit now, and it's starting to
        take some serious form now. Although some website functions are a little scuffed, this is all waaayy better than
        what my site used to be when it was just raw HTML and Bootstrap with all of the photos hardcoded in...
      </p>
      <p className="text-base">
        For now, please enjoy what content there is to enjoy on the site! Check out my pics under the "sets" tab. There will absolutely be a more to come.
      </p>
      <p className="text-base">
        Check out the <a href="https://github.com/kevinzhangTT/kevinistakingpictures" target="_blank" rel="noreferrer" className="text-periwinkle-500 underline hover:text-periwinkle-300">GitHub</a> for this project.
      </p>
    </GenericPage>
  );
}
