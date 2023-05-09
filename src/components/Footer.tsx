import React from 'react';

export default function Footer() {
  return (
    //! CONFIGURE CUSTOM COLOURS IN TAILWIND CONFIG FILE!!!
    <>
      <div className="flex bg-antique-300 h-32 justify-evenly items-center select-none">
        <span className="font-display">
          ©2023 Kevin Zhang
        </span>
        <span className="font-display">
          please do not steal my photos :p
        </span>
      </div>
    </>
  );
}