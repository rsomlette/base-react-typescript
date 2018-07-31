import { getType } from 'typesafe-actions';

import { IPokemonList } from '../../Model/FetchPokemonList';
import { FetchPokemonAction, fetchPokemonListActions } from './FetchPokemonActions';

export interface IState {
  error: Error | null;
  isLoading: boolean;
  payload: IPokemonList | null;
}

const initialState: IState = {
  error: null,
  isLoading: false,
  payload: null,
};

export function reducer(state: IState = initialState, action: FetchPokemonAction): IState {
  switch (action.type) {
    case getType(fetchPokemonListActions.fetch):
      return {
        ...initialState,
        isLoading: true,
      };
    case getType(fetchPokemonListActions.fetchSuccess):
      return {
        ...initialState,
        payload: action.payload,
      };

    case getType(fetchPokemonListActions.fetchFailure):
      return {
        ...initialState,
        error: action.payload,
      };

    default:
      return state;
  }
}

export const getTodos = (state: IState) => state.payload;
export const getLoading = (state: IState) => state.isLoading;
export const getError = (state: IState) => state.error;
