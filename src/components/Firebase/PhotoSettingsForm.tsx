import React, { useState } from 'react';

interface Props {
  title: string;
  setTitle: (title: string) => void;
  alt: string;
  setAlt: (alt: string) => void;
  dateTaken: string;
  setDateTaken: (dateTaken: string) => void;
  story: string;
  setStory: (story: string) => void;
}

export default function PhotoSettingsForm(props: Props) {
  const [title, setTitle] = useState('');
  const [alt, setAlt] = useState('');
  const [dateTaken, setDateTaken] = useState('');
  const [story, setStory] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    props.setTitle(e.target.value);
  };

  const handleAltChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlt(e.target.value);
    props.setAlt(e.target.value);
  };

  const handleDateTakenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateTaken(e.target.value);
    props.setDateTaken(e.target.value);
  };

  const handleStoryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStory(e.target.value);
    props.setStory(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <label htmlFor="title" className="text-xs text-antique-700/50">
        photo title
        <input
          id="title"
          placeholder='photo title'
          maxLength={64}
          value={title}
          onChange={handleTitleChange}
        />
      </label>
      <label htmlFor="alt" className="text-xs text-antique-700/50">
        alt (for web use)
        <input
          id="alt"
          placeholder='alt'
          maxLength={64}
          value={alt}
          onChange={handleAltChange}
        />
      </label>
      <label htmlFor="date taken" className="text-xs text-antique-700/50">
        date taken
        <input
          id="date taken"
          type="date"
          placeholder='date taken'
          maxLength={64}
          value={dateTaken}
          onChange={handleDateTakenChange}
        />
      </label>
      <label htmlFor="caption or story" className="text-xs text-antique-700/50">
        story/caption
        <textarea
          id="caption or story"
          placeholder='write a short caption for your picture, or the whole story of how you took this picture and what it means'
          value={story}
          onChange={handleStoryChange}
        />
      </label>
    </div>
  );
}

