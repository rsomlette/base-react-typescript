import { ActionType, createAction } from 'typesafe-actions';
import { IPokemonList } from '../../Model/FetchPokemonList';

export enum FetchPokemonListTypes {
  FETCH = 'fetch',
  FETCH_SUCCESS = 'success',
  FETCH_FAILURE = 'failure',
}

export const fetchPokemonListActions = {
  fetch: createAction(FetchPokemonListTypes.FETCH),
  fetchFailure: createAction(FetchPokemonListTypes.FETCH_FAILURE, (resolve) => {
    return (error: Error) => resolve(error);
  }),
  fetchSuccess: createAction(FetchPokemonListTypes.FETCH_SUCCESS, (resolve) => {
    return (payload: IPokemonList) => resolve(payload);
  }),
};

export type FetchPokemonAction = ActionType<typeof fetchPokemonListActions>;
