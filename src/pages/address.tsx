import React from 'react';
import Container from '../components/container';
import SearchForm from '../components/search-form';

const PageAddress = () => {
  return (
    <Container title='Поиск адресов' subtitle='Введите интересующий вас адрес'>
      <SearchForm />
    </Container>
  );
};

export default PageAddress;
