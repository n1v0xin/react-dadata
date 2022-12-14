import React from 'react';
import { logoIcon } from '../../utils/icons';
import './logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      {logoIcon} <span className='logo__text'>Wrench CRM</span>
    </div>
  );
};

export default Logo;
