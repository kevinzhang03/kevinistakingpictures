import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navLinks, socialLinks } from './NavData';
// import { setLinks } from './NavData';
import useBreakpoint from '../Hooks/useBreakpoint';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { motion, AnimatePresence } from 'framer-motion';

import useSets from '../Hooks/useSetsArray';
import { NavData } from './NavData';

// import { theme } from '../../../tailwind.config.js';


export default function Nav() {
  //! CHANGE 768 TO USE THE VALUE FROM TAILWIND.CONFIG.JS.THEME.SCREENS.MD
  const isDesktop = useBreakpoint() > 768;
  
  const [showLinkMap, setShowLinkMap] = useState(false);
  const [expandSets, setExpandSets] = useState(false);
  
  // Collapses the mobile nav menu whenever desktop mode is enabled
  useEffect(() => {
    if (isDesktop) {
      setShowLinkMap(false);
    }
  }, [isDesktop]);
  
  return (
    <div>
      {isDesktop ? (
        <nav className="flex flex-col gap-y-4 sticky top-8 lg:top-16 flex-none w-64 p-8 mb-8 lg:mb-16 place-items-end">
          <img
            src={require('./../../images/me-square-500px.jpg')}
            alt="it's me"
            className="sticky mb-4 w-full select-none pointer-events-none"
          />
          <LinkMap isDesktop={isDesktop} />
          <button onClick={() => (setExpandSets(!expandSets))} className={clsx(
            isDesktop ? 'text-right text-base' : 'text-center text-xl py-2',
            expandSets && ' mb-[-0.5rem]',
            'w-fit',
            'text-black opacity-75 hover:opacity-100 font-display',
            'transition-opacity duration-300',
            'hover:line-through hover:font-bold'
          )}>
            <FontAwesomeIcon icon={solid('caret-down')} className="mx-2"/>
            sets
          </button>
          {expandSets && (
            <SetsLinkMap isDesktop={isDesktop} />
          )}
          <div className="flex justify-end">
            <SocialMap />
          </div>
        </nav>
      ) : (
        <nav>
          <AnimatePresence>
            {showLinkMap && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.75, ease: [0.15, 0.5, 0.5, 1] }}
                // transition={{ duration: 0.75, ease: [0.5,0,0.5,1] }}
              >
                <div className="text-center">
                  <LinkMap isDesktop={isDesktop} />
                  <SetsLinkMap isDesktop={isDesktop} />
                  <div className="h-8" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex justify-between px-4">
            <SocialMap />
            <button
              onClick={() => setShowLinkMap(!showLinkMap)}
              className="px-4 text-2xl"
            >
              <FontAwesomeIcon icon={solid('bars')} />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}

function LinkMap({ isDesktop }: { isDesktop: boolean }) {
  return (
    <ul className="flex flex-col gap-y-4">
      {navLinks.links.map((link, index) => (
        <li
          key={index}
          className={clsx(
            isDesktop ? 'text-right text-lg' : 'text-center text-xl py-2',
            'text-black opacity-75 hover:opacity-100 font-display',
            'transition-opacity duration-300'
          )}
        >
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
  );
}

function SetsLinkMap({ isDesktop }: { isDesktop: boolean }) {
  // This would be in the NavData.tsx file but since we cannot define sets = useSets() outside of a functional
  // component, we have to place it right here instead. Pain.
  const {sets} = useSets();
  const setLinks: NavData = {
    links: sets.map((set) => ({
      title: set.data.name as string,
      path: `/set/${set.id}` as string,
    })),
  };

  return (
    <ul className="flex flex-col gap-y-4">
      {setLinks.links.map((link, index) => (
        <li
          key={index}
          className={clsx(
            isDesktop ? 'text-right text-sm' : 'text-center text-xl py-2',
            'text-antique-500 font-sans',
          )}
        >
          <Link to={link.path} className="hover:line-through">
            <span className="select-none">
              {link.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SocialMap() {
  return (
    <div>
      {socialLinks.links.map((link, index) => (
        <a
          key={index}
          href={link.link}
          target="_blank"
          rel="noreferrer"
          className="px-4 text-2xl
            text-black opacity-75 hover:opacity-100
            md:ml-4 md:p-0 md:text-xl
            transition-all duration-300"
        >
          <FontAwesomeIcon icon={link.icon}/>
        </a>
      ))}
    </div>
  );
}
