import React from 'react';
import './navbar.scss';
import Logo from '../logo';
import Profile from '../profile';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <Profile />
    </nav>
  );
};

export default Navbar;
