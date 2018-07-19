import { ActionsObservable, combineEpics, Epic } from 'redux-observable';

import { IFetchClientResponse, userClient } from '../Common/Clients/Helper/FetchUserClient';
import { Rxs } from '../Helper/Rsx';
import { FetchUserActions, FetchUserTypes } from '../Redux/FetchUser';

const fetchUser: Epic<any> = (action$: ActionsObservable<any>) =>
  action$.ofType(FetchUserTypes.FETCH).pipe(
    Rxs.flatMap$((action) =>
      userClient.fetch$(action.email, action.password).pipe(
        Rxs.flatMap$(onSuccess$),
        Rxs.catchError$(onError$),
      ),
    ),
  );

function onSuccess$(data: IFetchClientResponse) {
  return Rxs.of$(FetchUserActions.fetchSuccess);
}

function onError$(error: Error) {
  // const mappedError = mapAuthError(error);
  return Rxs.of$(FetchUserActions.fetchFailure);
}

export const fetchUserEpic = combineEpics(fetchUser);
