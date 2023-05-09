import React from 'react';

import GenericPage from './GenericPage';
import PhotoFrame from '../components/PhotoFrame';

export default function Home() {
  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
        we're live!!
      </h1>
      <p className="text-base">
        Welcome to my (new) site! This has been my little passion project for the last little bit now, and it's starting to
        take some serious form now. Although some website functions are a little scuffed, this is all waaayy better than
        what my site used to be when it was just raw HTML and Bootstrap with all of the photos hardcoded in...
      </p>
      <p className="text-base">
        For now, please enjoy what content there is to enjoy on the site! There will absolutely be a more to come.
      </p>
      <PhotoFrame
        url='https://kevinzhangtt.github.io/kevinistakingpictures-legacy/photographs/analog/2022-08-07%20Nikkormat-FTn%20Roll-1%20Portra-400%20Toronto-Island/edited-compressed/2022-08-07%20Nikkormat-FTn%20Roll-1%20Portra-400%20Toronto-Island%2012-edited-compressed.JPG'
        alt='gas station at night'
        story='Some random night scene I shot at... night. While waiting for the bus.'
        title='Midnight Fuel'
        date='2023-03-14'
        settings={null}
      />
      <PhotoFrame
        url='https://kevinzhangtt.github.io/kevinistakingpictures-legacy/photographs/smaller/Meetup%20Spadina%20and%20Grange-1930-smaller.JPG'
        alt=''
        story='Some random night scene I shot at... night. While waiting for the bus.'
        title='example title'
        date='2023-03-14'
        settings={null}
      />
    </GenericPage>
  );
}
