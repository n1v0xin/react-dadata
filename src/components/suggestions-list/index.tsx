import React from 'react';
import './suggestions-list.scss';
import { useSelector } from 'react-redux';
import { IState } from '../../interfaces/redux';
import { ISuggestion } from '../../interfaces/address';

const SuggestionsList = () => {
  const addressSuggestions = useSelector(
    (state: IState) => state.address.suggestions
  );

  return (
    <div className='suggestions'>
      <div className='suggestions__item suggestions__item--title'>Адреса</div>

      {addressSuggestions &&
        addressSuggestions.map((suggestion: ISuggestion, index) => {
          return (
            <div key={index} className='suggestions__item'>
              {suggestion.value}
            </div>
          );
        })}
    </div>
  );
};

export default SuggestionsList;
