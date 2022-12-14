import { all } from 'redux-saga/effects';
import { searchAddressWatcher } from './address';

export function* rootWatcher() {
  yield all([searchAddressWatcher()]);
}
