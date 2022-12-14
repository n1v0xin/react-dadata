import React from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import './container.scss';
import { IContainerProps } from './interface';

const Container = ({ title, subtitle, children }: IContainerProps) => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Sidebar />

        <section className='container'>
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}

          <div className='content'>{children}</div>
        </section>
      </main>
    </>
  );
};

export default Container;
