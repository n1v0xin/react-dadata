import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/index.scss';
import PageIndex from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<PageIndex />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
