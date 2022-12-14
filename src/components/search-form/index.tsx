import React from 'react';
import './search-form.scss';
import { addressIcon } from '../../utils/icons';
import { useDispatch } from 'react-redux';
import { addressSearchRequested } from '../../redux/actions/address';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [inputError, setInputError] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const onSearchSubmit = () => {
    setInputError(false);

    if (inputRef.current?.value.length! < 3) {
      setInputError(true);
    } else {
      setInputError(false);
      dispatch(addressSearchRequested(inputRef.current?.value!));
    }
  };

  return (
    <div className='search-form'>
      <div className='search-form__input-wrapper'>
        <input
          ref={inputRef}
          type='text'
          className={`search-form__input ${
            inputError ? 'search-form__input--error' : ''
          }`}
          placeholder='Введите интересующий вас адрес'
        />
        {inputError && (
          <div className='search-form__error'>
            Минимальная длина ввода в поле ввода адреса - 3 символа
          </div>
        )}
      </div>
      <button className='search-form__submit' onClick={onSearchSubmit}>
        {addressIcon} Поиск
      </button>
    </div>
  );
};

export default SearchForm;
