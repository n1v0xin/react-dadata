import React from 'react';
import './loading.scss';

const Loading = () => {
  return (
    <div className='loading'>
      <div className='loading__spin'></div>
      Загрузка...
    </div>
  );
};

export default Loading;
