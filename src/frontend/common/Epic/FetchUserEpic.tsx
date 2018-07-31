// import { ActionsObservable, combineEpics, Epic } from 'redux-observable';

// import { IAuthentication } from '../../../domain/Model/User/Authentication';

// import { userAdapter } from '../../../client/Adapter/UserAdapter';
// import { Rxs } from '../../../Domain/Helper/Rsx';
// import { FetchUserActions, FetchUserTypes } from '../Redux/FetchUser';

// const fetchUser: Epic<any> = (action$: ActionsObservable<any>) =>
//   action$.ofType(FetchUserTypes.FETCH).pipe(
//     Rxs.flatMap$((action) =>
//       userAdapter.fetch$(action.email, action.password).pipe(
//         Rxs.flatMap$(onSuccess$),
//         Rxs.catchError$(onError$),
//       ),
//     ),
//   );

// function onSuccess$(data: IAuthentication) {
//   return Rxs.of$(FetchUserActions.fetchSuccess);
// }

// function onError$(error: Error) {
//   return Rxs.of$(FetchUserActions.fetchFailure);
// }

// export const fetchUserEpic = combineEpics(fetchUser);
