import React from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import './container.scss';
import { IContainerProps } from './interface';

const Container = ({ title, subtitle, children }: IContainerProps) => {
  const getWindowWidth = () => {
    return window.innerWidth;
  };
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <>
      <Navbar />
      <main className='main'>
        {windowWidth > 768 ? <Sidebar /> : ''}

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
