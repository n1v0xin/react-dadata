import { IAddressError, Suggestions } from '../../interfaces/address';

export const addressSearchRequested = (inputValue: string) => ({
  type: 'SEARCH_ADDRESS_REQUEST',
  payload: inputValue,
});

export const addressSearchLoaded = (suggestions: Suggestions) => ({
  type: 'SEARCH_ADDRESS_SUCCESS',
  payload: suggestions,
});

export const addressSearchFailed = (error: IAddressError) => ({
  type: 'SEARCH_ADDRESS_ERROR',
  payload: error,
});
