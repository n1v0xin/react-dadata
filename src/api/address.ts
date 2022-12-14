import { token, url } from '../constants/api';
import { wrapper } from '../utils/wrapper';

export const sendAddressSearch = async (searchValue: string) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ' + token,
  };
  const method = 'post';
  const body = JSON.stringify({ query: searchValue });

  return await wrapper(headers, method, url, body);
};
