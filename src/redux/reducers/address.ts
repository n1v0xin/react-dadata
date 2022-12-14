import { IAddressAction, IAddressState } from '../../interfaces/address';

const initialState: IAddressState = {
  loading: false,
  suggestions: [],
  error: null,
};

const addressReducer = (state = initialState, action: IAddressAction) => {
  switch (action.type) {
    case 'SEARCH_ADDRESS_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'SEARCH_ADDRESS_SUCCESS':
      return {
        ...state,
        loading: false,
        suggestions: action.payload,
      };

    case 'SEARCH_ADDRESS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default addressReducer;
