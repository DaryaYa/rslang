import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { FaHome, FaGamepad } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';

export const SidebarData = [
  {
    title: 'Home',
    path: '/main',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Textbook',
    path: '/text-book',
    icon: <IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'MiniGames',
    path: '/mini-games',
    icon: <FaGamepad />,
    cName: 'nav-text'
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: <ImStatsDots />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <FiSettings />,
    cName: 'nav-text'
  },
];
