import axios, { RawAxiosRequestHeaders } from 'axios';

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

export const wrapper = async (
  headers: RawAxiosRequestHeaders,
  method: 'post' | 'get' | 'put' | 'delete',
  url: string,
  data?: any
) => {
  return await axios
    .request({ headers, method, url, data })
    .then(checkResponse)
    .catch(catchError);
};
