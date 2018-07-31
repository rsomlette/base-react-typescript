// import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
// import ping from "./ping";
// import { fetchUserReducer } from './FetchUser';
import * as FetchPokemonList from './FetchPokemonList/FetchPokemonReducer';

export interface IRootState {
  pokemonList: FetchPokemonList.IState;
}

export const rootReducer = combineReducers<IRootState>({
  pokemonList: FetchPokemonList.reducer,
});
