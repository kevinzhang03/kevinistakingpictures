import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

// import { theme } from '../../../tailwind.config.js';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { navLinks } from './NavData';

function Nav() {
  
  const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(1200);
    const resize = () => {
      setBreakpoint(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', resize);

      return () => {
        window.removeEventListener('resize', resize);
      };
    }, []);

    return breakpoint;
  };

  //! CHANGE 768 TO USE THE VALUE FROM TAILWIND.CONFIG.JS.THEME.SCREENS.MD
  const isDesktop = useBreakpoint() > 768;
  
  return (
    <div>
      {isDesktop ? (
        <nav className='w-64 p-4'>
          <img
            src={require('./../../images/me-square-500px.jpg')}
            alt="it's me"
            className="mb-8 w-full select-none pointer-events-none"
          />
          <ul>
            {navLinks.links.map((link, index) => (
              <li key={index} className="my-4 text-black/75 text-lg text-right font-display">
                <Link to={link.path} className="hover:line-through hover:font-bold">
                  <span className="select-none">
                    {link.title}
                  </span>
                  {link.icon && (
                    <FontAwesomeIcon icon={link.icon} className="w-8 pl-2" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div>
          {/* mobile time */}
        </div>
      )}
      
    </div>
  );
}

export default Nav;
