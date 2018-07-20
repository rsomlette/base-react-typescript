// import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
// import ping from "./ping";
import { fetchUserReducer } from './FetchUser';

// export const rootEpic = combineEpics(
//   pingEpic,
//   fetchUserEpic
// );

export const rootReducer = combineReducers({
  user: fetchUserReducer,
});
