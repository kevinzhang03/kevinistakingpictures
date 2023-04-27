import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useBreakpoint from './components/Hooks/useBreakpoint';
import clsx from 'clsx';

import Nav from './components/Navigation/Nav';
import { navLinks } from './components/Navigation/NavData';

import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  const isDesktop = useBreakpoint() > 768;

  return (
    <div className="bg-antique-100 min-h-screen flex flex-col">
      {
        //! Use breakpoints rather than isDesktop for responsiveness
      }
      <div className={clsx('flex-grow', isDesktop ? 'flex mt-8 lg:mt-16 lg:ml-16' : 'my-8')}>
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
      <ScrollTopButton />
    </div>
  );
}

export default App;