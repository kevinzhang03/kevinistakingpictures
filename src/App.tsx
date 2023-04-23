import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useBreakpoint from './components/Hooks/useBreakpoint';
import clsx from 'clsx';

import Nav from './components/Nav/Nav';
import { navLinks } from './components/Nav/NavData';

function App() {
  const isDesktop = useBreakpoint() > 768;

  return (
    <div className={clsx(isDesktop ? 'container mx-auto flex my-32' : 'my-8')}>
      <Router>
        <Nav />
        <div className="flex-1">
          <Routes>
            {navLinks.links.map((link, index) => (
              <Route key={index} path={link.path} element={link.page} />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;