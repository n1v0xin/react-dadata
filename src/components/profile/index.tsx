import React from 'react';
import { profileIcon } from '../../utils/icons';
import './profile.scss';

const Profile = () => {
  return (
    <div className='profile'>
      {profileIcon}
      <span className='profile__name'>Имя Фамилия</span>
    </div>
  );
};

export default Profile;
