import React from 'react';

function Footer() {
  return (
    //! CONFIGURE CUSTOM COLOURS IN TAILWIND CONFIG FILE!!!
    <>
      <div className="flex bg-antique-300 h-32 justify-evenly items-center">
        <p className="font-display">
          ©2023 Kevin Zhang
        </p>
        <p className="font-display">
          powered by sammi
        </p>
      </div>
    </>
  );
}

export default Footer;