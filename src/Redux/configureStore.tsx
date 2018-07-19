import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from '../Epic/RootEpic';
// import Services from '../Services';
import { rootReducer } from './RootReducer';
// import { composeEnhancers } from './utils';

const epicMiddleware = createEpicMiddleware();

function configureStore(initialState?: object) {
  // configure middlewares
  // const middlewares = [epicMiddleware];
  // // compose enhancers
  // const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // // create store
  // return createStore(rootReducer, initialState!, enhancer);

  const storeCreated = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return storeCreated;
}

const store = configureStore();

export default store;
