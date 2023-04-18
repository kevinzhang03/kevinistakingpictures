import React from 'react';

import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { navLinks } from './components/Nav/NavData';


function App() {
  return (
    <div className='container mx-auto flex'>
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