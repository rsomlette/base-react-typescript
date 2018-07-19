import { combineEpics } from 'redux-observable';

// import { pingEpic } from "./ping";
import { fetchUserEpic } from './FetchUserEpic';

export const rootEpic = combineEpics(fetchUserEpic);
