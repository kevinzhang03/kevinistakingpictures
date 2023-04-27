import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { motion, AnimatePresence } from 'framer-motion';

//! KNOWN BUG: if the button is pressed before the appearance animation is finished then the button will still
//! disappear but not scroll, leaving the user stuck where they are

function ScrollTopButton() {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setButtonVisible(true) : setButtonVisible(false);
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
          className="
            fixed bottom-16 right-16 p-4 rounded-full
            border border-antique-700/75
            backdrop-brightness-110
            hover:backdrop-brightness-200
            backdrop-blur-sm
            text-antique-700/75 drop-shadow-lg
          "
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

export default ScrollTopButton;
