import React from 'react';

import header from './Header.scss';

import Logo from './Logo';
import Menu from './Menu';
import Settings from '../Settings';
import Search from '../Search';

export default function Header() {
  return (
    <header className={header.container}>
      <Logo />
      <Menu />
      <Settings />
      <Search />
    </header>
  );
}
