import { put, call, takeLatest } from 'redux-saga/effects';
import { sendAddressSearch } from '../../api/address';
import { FixMe } from '../../interfaces';
import { IAddressAction } from '../../interfaces/address';
import { addressSearchFailed, addressSearchLoaded } from '../actions/address';

function* searchAddressWorker(action: IAddressAction): FixMe {
  try {
    const res = yield call(sendAddressSearch, action.payload);
    yield put(addressSearchLoaded(res.suggestions));
  } catch (error) {
    yield put(addressSearchFailed(error));
  }
}

export function* searchAddressWatcher(): FixMe {
  yield takeLatest('SEARCH_ADDRESS_REQUEST', searchAddressWorker);
}
