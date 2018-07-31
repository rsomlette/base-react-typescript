import { combineEpics } from 'redux-observable';
import { fetchPokemonListEpic } from './FetchPokemonList/FetchPokemonEpics';

// import { pingEpic } from "./ping";
// import { fetchUserEpic } from '../Epic/FetchUserEpic';

export const rootEpic = combineEpics(...fetchPokemonListEpic);
