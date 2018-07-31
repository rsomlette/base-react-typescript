import { ActionsObservable, Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { Rxs } from '../../../../Domain/Helper/Rsx';
import { pokemonClient } from '../../Client/PokemonClient';
import { IPokemonList } from '../../Model/FetchPokemonList';

import { fetchPokemonListActions } from './FetchPokemonActions';

// import { IAuthentication } from '../../../domain/Model/User/Authentication';

// import { userAdapter } from '../../../client/Adapter/UserAdapter';
// import { Rxs } from '../../../Domain/Helper/Rsx';
// import { FetchUserActions, FetchUserTypes } from '../Redux/FetchUser';

export const fetchPokemonEpic: Epic<any> = (action$: ActionsObservable<any>) =>
  action$.pipe(
    Rxs.filter$(isActionOf(fetchPokemonListActions.fetch)),
    Rxs.flatMap$((action) =>
      pokemonClient.fetchPokemonList$().pipe(
        Rxs.flatMap$(onSuccess$),
        Rxs.catchError$(onError$),
      ),
    ),
  );

function onSuccess$(data: IPokemonList) {
  // tslint:disable-next-line no-console
  console.warn('onSuccess');
  return Rxs.of$(fetchPokemonListActions.fetchSuccess(data));
}

function onError$(error: Error) {
  // tslint:disable-next-line no-console
  console.warn('onError');
  return Rxs.of$(fetchPokemonListActions.fetchFailure(error));
}

export const fetchPokemonListEpic = [fetchPokemonEpic];
