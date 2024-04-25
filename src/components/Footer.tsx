import React from 'react';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    //! CONFIGURE CUSTOM COLOURS IN TAILWIND CONFIG FILE!!!
    <>
      <div className="flex bg-antique-300 h-32 justify-evenly items-center select-none">
        <span className="font-display">
          ©2022-{currentYear} Kevin Zhang
        </span>
        <span className="font-display">
          please do not steal my photos :p
        </span>
      </div>
    </>
  );
}