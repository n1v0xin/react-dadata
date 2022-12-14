import { FixMe } from '.';

export interface ISuggestion {
  value: string;
}

export type Suggestions = ISuggestion[];

export interface IResponseSuggestions {
  suggestions: Suggestions;
}

export interface IAddressState {
  loading: boolean;
  suggestions: [] | Suggestions;
  error: null | IAddressError;
}

export interface IAddressAction {
  type: string;
  payload?: Suggestions | IAddressError;
}

export type IAddressError = FixMe;
