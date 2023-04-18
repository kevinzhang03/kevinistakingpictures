import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { navLinks } from './NavData';

function Nav() {
  return (
    <nav className='w-64 p-4'>
      <img
        src={require('./../../images/me-square-500px.jpg')}
        alt="it's me"
        className='mb-8 w-full select-none pointer-events-none'
      />
      <ul>
        {navLinks.links.map((link, index) => (
          <li key={index} className='my-4 text-black/75 text-lg text-right font-display'>
            <Link to={link.path} className='hover:line-through hover:font-bold'>
              <span className="select-none">
                {link.title}
              </span>
              {link.icon && (
                <FontAwesomeIcon icon={link.icon} className='w-8 pl-2' />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
