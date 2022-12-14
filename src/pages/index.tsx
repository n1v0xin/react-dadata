import React from 'react';
import Container from '../components/container';
import News from '../components/news';

const PageIndex = () => {
  return (
    <Container title='Новости' subtitle='Обновление CRM до 1.2'>
      <News />
    </Container>
  );
};

export default PageIndex;
