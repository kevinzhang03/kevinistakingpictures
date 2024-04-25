import React from 'react';
import image from './../images/ev3.JPG';

import GenericPage from './GenericPage';

export default function About() {
  return (
    <GenericPage>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
        some lore
      </h1>
      <p className="text-base">
        I'm a third-year UWaterloo student studying Computer Engineering, having worked for ecobee and Ford in the past.
        When I have time, I focus on developing my intuition, appreciation, and skill in various forms of art like
        photography, graphic design, and music. I want to be an artistic person with deep philosophical insight about
        various topics, but I just don't think I'm there yet. The creation of this site will kind of serve as my first
        step into becoming more of who I want to be. You'll see this as a platform to document any of my past or present
        ventures in whatever I am interested in, or just my thoughts on that particular evening.
      </p>
      <img
        src={image}
        className="w-full select-none pointer-events-none"
      />
      <p className="text-base">
        The creation of this site is something I've been putting off for a while because I'm a really good
        procrastinator, amplified by the fact that I incurred a lot of technical debt on the previous iteration of my
        main site. There were so many features and optimizations I wanted to add but that would mostly likely require a
        whole rewriting of the core of the project, but I didn't want to just abandon or discard the work I had already
        put in. I've already done it once before back when I only knew how to code in raw HTML and Bootstrap. It was
        bad, but it had to be done.
      </p>
      <p className="text-base">
        I was talking to <a href="https://www.wilburzhang.com/" target="_blank" rel="noreferrer"
          className="text-periwinkle-500 underline hover:text-periwinkle-300">a friend</a> about this one time and
        he told me that personal projects like websites are things that you should be comfortable with completely
        remaking once in a while because you grow and realize what you were happy with back then is only a fraction of
        what you appreciate today. If you look back at your old work and think it's trash, that means you've improved
        and refined yourself as an artist. It really stuck with me. <span className="line-through">But instead of
        working on the next iteration of kevinistakingpictures, I just created an entirely new one, which is what you
        see right now.</span> New site in the works.
      </p>
    </GenericPage>
  );
}
