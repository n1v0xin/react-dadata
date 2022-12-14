import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/container';
import Loading from '../components/loading';
import SearchForm from '../components/search-form';
import SuggestionsList from '../components/suggestions-list';
import { IState } from '../interfaces/redux';

const PageAddress = () => {
  const addressSuggestions = useSelector(
    (state: IState) => state.address.suggestions
  );
  const suggestionsLoading = useSelector(
    (state: IState) => state.address.loading
  );

  return (
    <Container title='Поиск адресов' subtitle='Введите интересующий вас адрес'>
      <SearchForm />
      {suggestionsLoading ? <Loading /> : ''}
      {addressSuggestions.length ? <SuggestionsList /> : ''}
    </Container>
  );
};

export default PageAddress;
