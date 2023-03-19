import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { faArchive } from '@fortawesome/free-solid-svg-icons';

function App() {
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
    </div>
  );
}

export default App;
