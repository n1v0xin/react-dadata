import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/index.scss';
import PageIndex from './pages';
import PageAddress from './pages/address';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<PageIndex />} />
          <Route path='/address' element={<PageAddress />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
