import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { motion, AnimatePresence } from 'framer-motion';

import clsx from 'clsx';

//! KNOWN BUG: if the button is pressed before the appearance animation is finished then the button will still
//! disappear but not scroll, leaving the user stuck where they are

export default function ScrollTopButton() {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 512
        ? setButtonVisible(true)
        : setButtonVisible(false);
    });
  }, []);

  const scrollUp = () => {
    setButtonClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!buttonVisible) {
      setButtonClicked(false);
    }
  }, [buttonVisible]);

  return (
    <AnimatePresence>
      {buttonVisible && !buttonClicked && (
        <motion.button
          onClick={scrollUp}
          className={clsx(
            'w-12 h-12 rounded-full',
            'fixed bottom-4 right-4 md:bottom-16 md:right-16',
            'border border-antique-700/75',
            'backdrop-brightness-110',
            'backdrop-saturate-150',
            'hover:backdrop-brightness-150',
            'backdrop-blur-sm',
            'text-antique-700/75',
            'drop-shadow',
          )}
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.15, 0.5, 0.5, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={solid('arrow-up')} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
