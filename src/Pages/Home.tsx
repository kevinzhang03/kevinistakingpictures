import React from 'react';

import GenericPage from './GenericPage';
import PhotoFrame from '../components/PhotoFrame';

function Home() {
  return (
    <GenericPage>
      <h1 className="text-5xl font-bold font-display mb-4">
        welcome to my new site!
      </h1>
      <p className="mb-2 text-base">
        Welcome to my site! It ain't much, but it's my little passion project and I'm glad to have at
        least something up and running on the internet. Please don't mind the dust, the site is still in
        its very early stages and is being worked on. However, the important part is that it allows you
        to view my work with a mildly decent user experience :)
      </p>
      <p className="mb-2 text-base">
        The thing about analog photography I really enjoy is that you can find a scene, you can see what
        you wanna shoot, and you can compose your shot with your camera and just fire your shutter.
        However, in that moment, that's just it. There's no going back to shoot a better shot because
        this is the only chance ever that you will get a scene like this. More importantly, you don't
        even know what your picture even looks like until you get your film developed and scanned. So what
        you get is what you get.
      </p>
      <PhotoFrame
        photo='../../images/photographs/gas-station.jpg'
        alt='gas station at night'
        story='Some random night scene I shot at... night. While waiting for the bus.'
        title='Midnight Fuel'
        date='2023-03-14'
        settingsAnalog={{
          camera: 'Nikon FE2',
          film: 'Cinestill 800T',
          lens: 'Nikon 50mm f/1.8 Series E',
        }}
      />
      <PhotoFrame
        photo='../../images/photographs/katherine-goffy.jpg'
        alt=''
        story='Some random night scene I shot at... night. While waiting for the bus.'
        title='example title'
        date='2023-03-14'
        settingsDigital={{
          camera: 'Nikon D810',
          focalLength: '50mm',
          aperture: 'f/1.8',
          shutterSpeed: '1/60s',
          ISO: 800,
        }}
      />
    </GenericPage>
  );
}

export default Home;