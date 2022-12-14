import { combineReducers } from '@reduxjs/toolkit';
import addressReducer from './address';

const rootReducer = combineReducers({
  address: addressReducer,
});

export default rootReducer;
