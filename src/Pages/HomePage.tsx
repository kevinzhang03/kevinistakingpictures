import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faArchive } from '@fortawesome/free-solid-svg-icons';

import Nav from '../Components/Nav';

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <FontAwesomeIcon icon={brands('github')} />
      <FontAwesomeIcon icon={brands('twitter')} />
      <FontAwesomeIcon icon={brands('twitch')} />
      <FontAwesomeIcon icon={faArchive} />
      <FontAwesomeIcon icon={regular('edit')} />
      <FontAwesomeIcon icon={solid('archive')} />

      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: 3 }}>
          <Nav />
        </div>
        <div style={{ flex: 7, backgroundColor: 'lightgray' }}>
        Main content goes here
        </div>
      </div>
    </div>
  );
}

export default HomePage;
