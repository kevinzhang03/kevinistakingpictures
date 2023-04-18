import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { Home, Analog, Blog, About, Resume } from '../../Pages/pageIndex';

interface NavLink {
  title: string;
  path: string;
  page: React.ReactNode;
  icon?: IconDefinition;
  className?: string;
}

export interface NavData {
  links: NavLink[];
}

export const navLinks: NavData = {
  links: [
    {
      title: 'home',
      path: '/',
      page: <Home />,
      // icon: solid('home'),
    },
    {
      title: 'analog',
      path: '/analog',
      page: <Analog />,
      // icon: solid('camera'),
    },
    {
      title: 'blog',
      path: '/blog',
      page: <Blog />,
      // icon: solid('feather'),
    },
    {
      title: 'about',
      path: '/about',
      page: <About />,
      // icon: solid('address-card'),
    },
    {
      title: 'resume',
      path: '/resume',
      page: <Resume />,
      // icon: solid('file-lines'),
    },
  ]
};
