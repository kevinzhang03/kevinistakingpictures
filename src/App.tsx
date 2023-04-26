import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useBreakpoint from './components/Hooks/useBreakpoint';
import clsx from 'clsx';

import Nav from './components/Nav/Nav';
import { navLinks } from './components/Nav/NavData';

import Footer from './components/Footer';

function App() {
  const isDesktop = useBreakpoint() > 768;

  return (
    <div>
      {/* <div className={clsx(isDesktop ? 'container flex mx-auto mt-32' : 'my-8')}> */}
      <div className={clsx(isDesktop ? 'flex mt-8 lg:mt-16 lg:ml-16' : 'my-8')}>
        <Router>
          <Nav />
          <Routes>
            {navLinks.links.map((link, index) => (
              <Route key={index} path={link.path} element={link.page} />
            ))}
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;