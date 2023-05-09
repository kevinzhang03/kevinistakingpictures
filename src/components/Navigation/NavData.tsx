import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import { Home, Analog, Blog, About, Secret } from '../../Pages/pageIndex';

 interface NavLink {
  title: string;
  path: string;
  page?: React.ReactNode;
  icon?: IconDefinition;
  className?: string;
}

export interface NavData {
  links: NavLink[];
}

interface SocialLink {
  platform: string;
  link: string;
  icon: IconDefinition;
  className?: string;
}

export interface socialData {
  links: SocialLink[];
}

export const navLinks: NavData = {
  links: [
    {
      title: 'home',
      path: '/',
      page: <Home />,
      // icon: solid('home'),
    },
    // {
    //   title: 'analog',
    //   path: '/analog',
    //   page: <Analog />,
    //   // icon: solid('camera'),
    // },
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
      title: 'secret',
      path: '/secret',
      page: <Secret />,
      // icon: solid('file-lines'),
    },
  ]
};

export const socialLinks: socialData = {
  links: [
    {
      platform: 'instagram',
      link: 'https://www.instagram.com/kevinistakingpictures/',
      icon: brands('instagram-square'),
    },
    {
      platform: 'github',
      link: 'https://github.com/kevinzhangTT',
      icon: brands('github-square'),
    },
    {
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kevin-zhang-uwaterloo/',
      icon: brands('linkedin'),
    },
    {
      platform: 'email',
      link: 'mailto:kevin9019888@gmail.com',
      icon: solid('envelope-square'),
    },
  ]
};
