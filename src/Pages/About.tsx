import React from 'react';

import GenericPage from './GenericPage';

export default function About() {
  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
        a little about me
      </h1>
      <p className="text-base">
        Hi!! I'm Kevin Zhang, currently a second-year student at the University of Waterloo, studying electrical
        engineering. It's a tough program, but I find a lot of enjoyment from it. Digging deep into the technical
        details of how the technologies we use and take granted every day really gives me a sense of appreciation of
        the ingenuity and innovation required to make these things work.
      </p>
      <p className="text-base">
        As you would have probably guessed from this site, I am also an avid photographer. My main passion is film
        photography, but I guess I'm still trying to figure out what I really want to be as a photographer. I've tried
        exploring a lot of different genres like street photography, landscape, and wildlife. Since I'm
        going to be mostly in studying Waterloo, I won't have that much of an opportunity to explore my creativity and
        discover the things I love shooting. That doesn't mean that I won't shoot though.
      </p>
      <p className="text-base">
        Right now I've kind of been doing a lot of documentary photography. It's a bit mundane since it's just the
        normal day-to-day life of a student, but I guess that's the whole point. It may not seem very special right now,
        but the pictures will have more value the further back you look at them from. Or maybe it's cope!
      </p>
    </GenericPage>
  );
}
